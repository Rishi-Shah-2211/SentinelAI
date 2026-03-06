import express from "express";
import cors from "cors";
import activityRoutes from "./routes/activityRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Root health route
app.get("/", (req, res) => {
  res.json({ status: "SentinelAI backend running" });
});

// Test API route
app.get("/api/test", (req, res) => {
  res.json({ message: "Activity endpoint reached" });
});

// Activity routes
app.use("/api/activity", activityRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});