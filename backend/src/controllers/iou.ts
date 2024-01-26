import { Request, Response } from "express";
import Database from "../db";
import { ObjectId } from "mongodb";
import { IOU } from "../interface";
const { getDb } = new Database();

export const getAllIOUs = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const ious = await db.collection<IOU>("ious").find().toArray();
    res.json(ious);
  } catch (error) {
    console.error("Error fetching IOUs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getIOUById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const iouId = new ObjectId(req.params.id);
    const db = getDb();
    const iou = await db.collection<IOU>("ious").findOne({ _id: iouId });

    if (iou) {
      res.json(iou);
    } else {
      res.status(404).json({ error: "IOU not found" });
    }
  } catch (error) {
    console.error("Error fetching IOU:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createIOU = async (req: Request, res: Response): Promise<void> => {
  try {
    const db = getDb();
    const newIOU: IOU = req.body;
    const result = await db.collection<IOU>("ious").insertOne(newIOU);
    res.json(result);
  } catch (error) {
    console.error("Error creating IOU:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateIOU = async (req: Request, res: Response): Promise<void> => {
  try {
    const iouId = new ObjectId(req.params.id);
    const db = getDb();
    const updatedIOU: IOU = req.body;
    const result = await db
      .collection<IOU>("ious")
      .updateOne({ _id: iouId }, { $set: updatedIOU });

    if (result.matchedCount > 0) {
      res.json({ message: "IOU updated successfully" });
    } else {
      res.status(404).json({ error: "IOU not found" });
    }
  } catch (error) {
    console.error("Error updating IOU:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteIOU = async (req: Request, res: Response): Promise<void> => {
  try {
    const iouId = new ObjectId(req.params.id);
    const db = getDb();
    const result = await db.collection<IOU>("ious").deleteOne({ _id: iouId });

    if (result.deletedCount > 0) {
      res.json({ message: "IOU deleted successfully" });
    } else {
      res.status(404).json({ error: "IOU not found" });
    }
  } catch (error) {
    console.error("Error deleting IOU:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
