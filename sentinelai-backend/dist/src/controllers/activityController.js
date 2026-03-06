"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRiskTrends = exports.getHighRiskUsers = exports.getAlerts = exports.getOverview = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const getOverview = async (req, res) => {
    try {
        const totalUsers = await prisma_1.default.user.count();
        const totalActivities = await prisma_1.default.activity.count();
        const totalAlerts = await prisma_1.default.alert.count();
        const avgRiskResult = await prisma_1.default.riskHistory.aggregate({
            _avg: {
                riskScore: true
            }
        });
        const avgRisk = avgRiskResult._avg?.riskScore || 0;
        res.json({
            totalUsers,
            totalActivities,
            totalAlerts,
            avgRisk
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to fetch overview"
        });
    }
};
exports.getOverview = getOverview;
const getAlerts = async (req, res) => {
    try {
        const alerts = await prisma_1.default.alert.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        res.json(alerts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to fetch alerts"
        });
    }
};
exports.getAlerts = getAlerts;
const getHighRiskUsers = async (req, res) => {
    try {
        const users = await prisma_1.default.riskHistory.findMany({
            take: 10,
            orderBy: {
                riskScore: "desc"
            }
        });
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to fetch high risk users"
        });
    }
};
exports.getHighRiskUsers = getHighRiskUsers;
const getRiskTrends = async (req, res) => {
    try {
        const trends = await prisma_1.default.riskHistory.findMany({
            orderBy: {
                timestamp: "asc"
            },
            take: 50
        });
        res.json(trends);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to fetch risk trends"
        });
    }
};
exports.getRiskTrends = getRiskTrends;
