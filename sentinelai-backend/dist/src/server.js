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
// Root health route
app.get("/", (req, res) => {
    res.json({ status: "SentinelAI backend running" });
});
// Test API route
app.get("/api/test", (req, res) => {
    res.json({ message: "Activity endpoint reached" });
});
// Activity routes
app.use("/api/activity", activityRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
