import express from "express"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"

import activityRoutes from "./routes/activityRoutes"
import analyticsRoutes from "./routes/analyticsRoutes"
const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)

export const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

io.on("connection", (socket) => {

  console.log("Client connected:", socket.id)

  socket.on("disconnect", () => {
    console.log("Client disconnected")
  })

})

app.use("/api/activity", activityRoutes)
app.use("/api/analytics", analyticsRoutes)

server.listen(5000, () => {
  console.log("Server running on port 5000")
})