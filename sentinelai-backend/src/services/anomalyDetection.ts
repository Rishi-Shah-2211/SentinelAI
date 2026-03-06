import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UserRisk = {
  userId: string;
  riskScore: number;
  anomalies: string[];
};

type UserStats = {
  login: number;
  email_send: number;
  usb_insert: number;
  file_download: number;
  database_query: number;
  file_upload: number;
  logout: number;
  total: number;
};

export async function analyzeUserBehavior(): Promise<UserRisk[]> {

  const activities = await prisma.activity.findMany();

  const userStats: Record<string, UserStats> = {};

  for (const activity of activities) {

    const user = activity.userId;

    if (!userStats[user]) {
      userStats[user] = {
        login: 0,
        email_send: 0,
        usb_insert: 0,
        file_download: 0,
        database_query: 0,
        file_upload: 0,
        logout: 0,
        total: 0
      };
    }

    const action = activity.action as keyof UserStats;

    if (action in userStats[user]) {
      userStats[user][action] += 1;
    }

    userStats[user].total += 1;
  }

  const results: UserRisk[] = [];

  for (const userId in userStats) {

    const stats = userStats[userId];

    let riskScore = 0;
    const anomalies: string[] = [];

    if (stats.usb_insert > 10) {
      riskScore += 25;
      anomalies.push("Excessive USB usage");
    }

    if (stats.file_download > 20) {
      riskScore += 25;
      anomalies.push("High file downloads");
    }

    if (stats.email_send > 25) {
      riskScore += 20;
      anomalies.push("Unusual email activity");
    }

    if (stats.database_query > 20) {
      riskScore += 15;
      anomalies.push("Heavy database access");
    }

    if (stats.file_upload > 15) {
      riskScore += 15;
      anomalies.push("High file uploads");
    }

    results.push({
      userId,
      riskScore,
      anomalies
    });
  }

  return results;
}