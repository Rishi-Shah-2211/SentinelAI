import { Router } from "express"
import prisma from "../lib/prisma"

const router = Router()

router.post("/", async (req, res) => {
  try {
    const { userId, action, device, location } = req.body

    const activity = await prisma.activity.create({
      data: {
        userId,
        action,
        device,
        location,
        riskScore: Math.random(),
        timestamp: new Date()
      }
    })

    res.json(activity)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to create activity" })
  }
})

export default router