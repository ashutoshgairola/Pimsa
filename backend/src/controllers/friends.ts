import { Request, Response } from "express";
import Database from "../db";
import { ObjectId } from "mongodb";
import { Friend } from "../interface";
const { getDb } = new Database();

export const getAllFriends = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const friends = await db.collection<Friend>("friends").find().toArray();
    res.json(friends);
  } catch (error) {
    console.error("Error fetching friends:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getFriendById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const friendId = new ObjectId(req.params.id);
    const db = getDb();
    const friend = await db
      .collection<Friend>("friends")
      .findOne({ _id: friendId });

    if (friend) {
      res.json(friend);
    } else {
      res.status(404).json({ error: "Friend not found" });
    }
  } catch (error) {
    console.error("Error fetching friend:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createFriend = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const newFriend: Friend = req.body;
    const result = await db.collection<Friend>("friends").insertOne(newFriend);
    res.json(result);
  } catch (error) {
    console.error("Error creating friend:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateFriend = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const friendId = new ObjectId(req.params.id);
    const db = getDb();
    const updatedFriend: Friend = req.body;
    const result = await db
      .collection<Friend>("friends")
      .updateOne({ _id: friendId }, { $set: updatedFriend });

    if (result.matchedCount > 0) {
      res.json({ message: "Friend updated successfully" });
    } else {
      res.status(404).json({ error: "Friend not found" });
    }
  } catch (error) {
    console.error("Error updating friend:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteFriend = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const friendId = new ObjectId(req.params.id);
    const db = getDb();
    const result = await db
      .collection<Friend>("friends")
      .deleteOne({ _id: friendId });

    if (result.deletedCount > 0) {
      res.json({ message: "Friend deleted successfully" });
    } else {
      res.status(404).json({ error: "Friend not found" });
    }
  } catch (error) {
    console.error("Error deleting friend:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
