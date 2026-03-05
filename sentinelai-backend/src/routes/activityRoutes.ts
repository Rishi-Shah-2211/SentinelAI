import express from "express";
import {
  getOverview,
  getAlerts,
  getHighRiskUsers,
  getRiskTrends
} from "../controllers/analyticsController";

const router = express.Router();

router.get("/overview", getOverview);
router.get("/alerts", getAlerts);
router.get("/users/high-risk", getHighRiskUsers);
router.get("/risk-trends", getRiskTrends);

export default router;