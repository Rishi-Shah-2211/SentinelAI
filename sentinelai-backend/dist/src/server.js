"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const activityRoutes_1 = __importDefault(require("./routes/activityRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/api/test", (req, res) => {
    res.json({ message: "SentinelAI backend is running" });
});
// Activity API
app.use("/api/activity", activityRoutes_1.default);
// Health check
app.get("/", (req, res) => {
    res.send("SentinelAI backend running");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
