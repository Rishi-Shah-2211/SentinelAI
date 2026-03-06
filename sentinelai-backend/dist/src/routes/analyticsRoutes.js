"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const analyticsController_1 = require("../controllers/analyticsController");
const router = express_1.default.Router();
router.get("/overview", analyticsController_1.getOverview);
router.get("/alerts", analyticsController_1.getAlerts);
router.get("/users/high-risk", analyticsController_1.getHighRiskUsers);
router.get("/risk-trends", analyticsController_1.getRiskTrends);
exports.default = router;
