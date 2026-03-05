import { Request, Response } from "express"
import prisma from "../lib/prisma"

export const getOverview = async (req: Request, res: Response) => {

  try {

    const totalUsers = await (prisma as any).user.count()
    const totalActivities = await (prisma as any).activity.count()
    const totalAlerts = await (prisma as any).alert.count()

    const avgRiskResult = await (prisma as any).riskHistory.aggregate({
      _avg: {
        riskScore: true
      }
    })

    const avgRisk = avgRiskResult._avg?.riskScore || 0

    res.json({
      totalUsers,
      totalActivities,
      totalAlerts,
      avgRisk
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: "Failed to fetch overview"
    })

  }
}

export const getAlerts = async (req: Request, res: Response) => {

  try {

    const alerts = await (prisma as any).alert.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })

    res.json(alerts)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: "Failed to fetch alerts"
    })

  }
}

export const getHighRiskUsers = async (req: Request, res: Response) => {

  try {

    const users = await (prisma as any).riskHistory.findMany({
      take: 10,
      orderBy: {
        riskScore: "desc"
      }
    })

    res.json(users)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: "Failed to fetch high risk users"
    })

  }
}