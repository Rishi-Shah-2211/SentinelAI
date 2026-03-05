import express from "express"
import cors from "cors"

import activityRoutes from "./routes/activityRoutes"

const app = express()

app.use(cors())
app.use(express.json())

// Activity API
app.use("/api/activity", activityRoutes)

// Health check
app.get("/", (req, res) => {
  res.send("SentinelAI backend running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})