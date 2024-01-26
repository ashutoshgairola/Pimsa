import { Request, Response } from "express";
import Database from "../db";
import { ObjectId } from "mongodb";
import { Notification } from "../interface";
const { getDb } = new Database();

export const getAllNotifications = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const notifications = await db
      .collection<Notification>("notifications")
      .find()
      .toArray();
    res.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getNotificationById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const notificationId = new ObjectId(req.params.id);
    const db = getDb();
    const notification = await db
      .collection<Notification>("notifications")
      .findOne({ _id: notificationId });

    if (notification) {
      res.json(notification);
    } else {
      res.status(404).json({ error: "Notification not found" });
    }
  } catch (error) {
    console.error("Error fetching notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const newNotification: Notification = req.body;
    const result = await db
      .collection<Notification>("notifications")
      .insertOne(newNotification);
    res.json(result);
  } catch (error) {
    console.error("Error creating notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const notificationId = new ObjectId(req.params.id);
    const db = getDb();
    const updatedNotification: Notification = req.body;
    const result = await db
      .collection<Notification>("notifications")
      .updateOne({ _id: notificationId }, { $set: updatedNotification });

    if (result.matchedCount > 0) {
      res.json({ message: "Notification updated successfully" });
    } else {
      res.status(404).json({ error: "Notification not found" });
    }
  } catch (error) {
    console.error("Error updating notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const notificationId = new ObjectId(req.params.id);
    const db = getDb();
    const result = await db
      .collection<Notification>("notifications")
      .deleteOne({ _id: notificationId });

    if (result.deletedCount > 0) {
      res.json({ message: "Notification deleted successfully" });
    } else {
      res.status(404).json({ error: "Notification not found" });
    }
  } catch (error) {
    console.error("Error deleting notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
