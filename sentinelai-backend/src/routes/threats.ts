import express from "express";
import { analyzeUserBehavior } from "../services/anomalyDetection";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const threats = await analyzeUserBehavior();

    const highRisk = threats.filter((t) => t.riskScore >= 40);

    res.json({
      message: "Threat analysis completed",
      totalUsersAnalyzed: threats.length,
      highRiskUsers: highRisk.length,
      threats
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Threat detection failed"
    });
  }
});

export default router;