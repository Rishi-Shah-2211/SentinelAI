import { Router } from "express"
import prisma from "../lib/prisma"

const router = Router()

router.post("/", async (req, res) => {
  try {
    const { userId, action } = req.body

    if (!userId || !action) {
      return res.status(400).json({
        error: "userId and action are required"
      })
    }

    const activity = await prisma.activity.create({
      data: {
        userId: userId,
        action: action,
        riskScore: Math.random()
      }
    })

    res.json(activity)

  } catch (error) {
    console.error("Activity creation failed:", error)

    res.status(500).json({
      error: "Failed to create activity"
    })
  }
})

export default router