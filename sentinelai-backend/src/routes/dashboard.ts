import express from "express";
import { PrismaClient } from "@prisma/client";
import { analyzeUserBehavior } from "../services/anomalyDetection";

const router = express.Router();
const prisma = new PrismaClient();

/* ===============================
   Dashboard Summary
================================ */

router.get("/summary", async (req, res) => {
  try {
    const totalActivities = await prisma.activity.count();
    const threats = await analyzeUserBehavior();

    const highRiskUsers = threats.filter(t => t.riskScore >= 70).length;

    res.json({
      totalActivities,
      totalUsers: threats.length,
      highRiskUsers
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Dashboard summary failed" });
  }
});

/* ===============================
   Risk Leaderboard
================================ */

router.get("/risk-users", async (req, res) => {
  try {

    const threats = await analyzeUserBehavior();

    const sorted = threats
      .sort((a, b) => b.riskScore - a.riskScore)
      .slice(0, 10);

    res.json(sorted);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Risk leaderboard failed" });
  }
});

/* ===============================
   Activity Trends
================================ */

router.get("/activity-trends", async (req, res) => {
  try {

    const activities = await prisma.activity.groupBy({
      by: ["action"],
      _count: {
        action: true
      }
    });

    res.json(activities);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Activity trends failed" });
  }
});

/* ===============================
   Anomaly Statistics
================================ */

router.get("/anomalies", async (req, res) => {
  try {

    const threats = await analyzeUserBehavior();

    const anomalyCounts: Record<string, number> = {};

    threats.forEach(user => {
      user.anomalies.forEach(a => {
        anomalyCounts[a] = (anomalyCounts[a] || 0) + 1;
      });
    });

    res.json(anomalyCounts);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Anomaly stats failed" });
  }
});

export default router;