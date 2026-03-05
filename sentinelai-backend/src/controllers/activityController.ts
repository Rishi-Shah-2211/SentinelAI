import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const ingestActivity = async (req: Request, res: Response) => {
  try {
    const { userId, action, metadata } = req.body;

    const activity = await prisma.activity.create({
      data: {
        userId,
        action,
        metadata,
        riskScore: 0
      }
    });

    res.json({
      message: "Activity ingested successfully",
      activity
    });

  } catch (error) {
    console.error("Activity ingestion error:", error);
    res.status(500).json({
      error: "Failed to ingest activity"
    });
  }
};