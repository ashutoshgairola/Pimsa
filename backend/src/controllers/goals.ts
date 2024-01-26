import { Request, Response } from "express";
import Database from "../db";
import { ObjectId } from "mongodb";
import { Goal } from "../interface";
const { getDb } = new Database();

export const getAllGoals = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const goals = await db.collection<Goal>("goals").find().toArray();
    res.json(goals);
  } catch (error) {
    console.error("Error fetching goals:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getGoalById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const goalId = new ObjectId(req.params.id);
    const db = getDb();
    const goal = await db.collection<Goal>("goals").findOne({ _id: goalId });

    if (goal) {
      res.json(goal);
    } else {
      res.status(404).json({ error: "Goal not found" });
    }
  } catch (error) {
    console.error("Error fetching goal:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createGoal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const newGoal: Goal = req.body;
    const result = await db.collection<Goal>("goals").insertOne(newGoal);
    res.json(result);
  } catch (error) {
    console.error("Error creating goal:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateGoal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const goalId = new ObjectId(req.params.id);
    const db = getDb();
    const updatedGoal: Goal = req.body;
    const result = await db
      .collection<Goal>("goals")
      .updateOne({ _id: goalId }, { $set: updatedGoal });

    if (result.matchedCount > 0) {
      res.json({ message: "Goal updated successfully" });
    } else {
      res.status(404).json({ error: "Goal not found" });
    }
  } catch (error) {
    console.error("Error updating goal:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteGoal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const goalId = new ObjectId(req.params.id);
    const db = getDb();
    const result = await db
      .collection<Goal>("goals")
      .deleteOne({ _id: goalId });

    if (result.deletedCount > 0) {
      res.json({ message: "Goal deleted successfully" });
    } else {
      res.status(404).json({ error: "Goal not found" });
    }
  } catch (error) {
    console.error("Error deleting goal:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
