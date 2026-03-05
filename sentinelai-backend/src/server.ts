import express from "express"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"

import activityRoutes from "./routes/activityRoutes"
import analyticsRoutes from "./routes/analyticsRoutes"

const app = express()

app.use(cors())
app.use(express.json())

/* ------------------------------
   Root Health Check Endpoint
-------------------------------- */

app.get("/", (req, res) => {
  res.json({
    service: "SentinelAI Backend",
    status: "Running",
    version: "1.0",
    message: "AI Insider Threat Detection API"
  })
})

/* ------------------------------
   API Routes
-------------------------------- */

app.use("/api/activity", activityRoutes)
app.use("/api/analytics", analyticsRoutes)

/* ------------------------------
   WebSocket Setup
-------------------------------- */

const server = http.createServer(app)

export const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id)

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id)
  })
})

/* ------------------------------
   Start Server
-------------------------------- */

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`SentinelAI backend running on port ${PORT}`)
})