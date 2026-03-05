import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getOverview = async (req: Request, res: Response) => {
  try {
    const totalUsers = await prisma.user.count();
    const totalActivities = await prisma.activity.count();
    const totalAlerts = await prisma.alert.count();

    const avgRisk = await prisma.activity.aggregate({
      _avg: { riskScore: true }
    });

    res.json({
      totalUsers,
      totalActivities,
      totalAlerts,
      averageRiskScore: avgRisk._avg.riskScore || 0
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch overview" });
  }
};

export const getAlerts = async (req: Request, res: Response) => {
  try {
    const alerts = await prisma.alert.findMany({
      include: { user: true },
      orderBy: { createdAt: "desc" }
    });

    res.json(alerts);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch alerts" });
  }
};

export const getHighRiskUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: { activities: true }
    });

    const usersWithRisk = users.map((user: any) => {
      const avgRisk =
        user.activities.reduce(
          (sum: number, a: any) => sum + a.riskScore,
          0
        ) / (user.activities.length || 1);

      return {
        userId: user.id,
        email: user.email,
        averageRiskScore: avgRisk
      };
    });

    const sorted = usersWithRisk.sort(
      (a: any, b: any) => b.averageRiskScore - a.averageRiskScore
    );

    res.json(sorted.slice(0, 10));

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch high risk users" });
  }
};

export const getRiskTrends = async (req: Request, res: Response) => {
  try {
    const activities = await prisma.activity.findMany({
      orderBy: { createdAt: "asc" }
    });

    const trends = activities.map((a: any) => ({
      timestamp: a.createdAt,
      riskScore: a.riskScore
    }));

    res.json(trends);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch risk trends" });
  }
};