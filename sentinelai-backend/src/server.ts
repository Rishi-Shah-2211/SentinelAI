import express from "express";
import cors from "cors";
import dashboardRoutes from "./routes/dashboard";

import activityRoutes from "./routes/activityRoutes";
import analyticsRoutes from "./routes/analyticsRoutes";
import threatsRouter from "./routes/threats";

const app = express();

/* =========================
   Middleware
========================= */

app.use(cors());
app.use(express.json());

/* =========================
   Health + Root Routes
========================= */

app.get("/", (req, res) => {
  res.json({
    message: "SentinelAI backend running",
    service: "SentinelAI",
    status: "healthy"
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "API working"
  });
});

/* =========================
   API Routes
========================= */

app.use("/api/activity", activityRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/threats", threatsRouter);
app.use("/api/dashboard", dashboardRoutes);

/* =========================
   Server Start
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 SentinelAI server running on port ${PORT}`);
});