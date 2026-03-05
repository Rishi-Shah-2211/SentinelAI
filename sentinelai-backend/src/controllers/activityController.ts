import { Request, Response } from "express"
import prisma from "../lib/prisma"

export const createActivity = async (req: Request, res: Response) => {
  try {

    const userId = req.body.userId as string
    const action = req.body.action as string

    const activity = await (prisma as any).activity.create({
      data: {
        userId,
        action
      }
    })

    res.json(activity)

  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: "Failed to create activity"
    })
  }
}