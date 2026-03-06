import express from "express";
import cors from "cors";
import threatsRouter from "./routes/threats";

import activityRoutes from "./routes/activityRoutes";
import analyticsRoutes from "./routes/analyticsRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "SentinelAI backend running" });
});

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

// Routes
app.use("/api/activity", activityRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/threats", threatsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});