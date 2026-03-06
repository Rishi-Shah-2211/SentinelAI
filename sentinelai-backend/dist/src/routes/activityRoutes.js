"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    try {
        const { userId, action } = req.body;
        if (!userId || !action) {
            return res.status(400).json({
                error: "userId and action are required"
            });
        }
        const activity = await prisma_1.default.activity.create({
            data: {
                userId: userId,
                action: action,
                riskScore: Math.random()
            }
        });
        res.json(activity);
    }
    catch (error) {
        console.error("Activity creation failed:", error);
        res.status(500).json({
            error: "Failed to create activity"
        });
    }
});
exports.default = router;
