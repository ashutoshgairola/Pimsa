import { Request, Response } from "express";
import Database from "../db";
import { ObjectId } from "mongodb";
import { Transaction } from "../interface";
const { getDb } = new Database();

export const getAllTransactions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const transactions = await db
      .collection<Transaction>("transactions")
      .find()
      .toArray();
    res.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTransactionById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const transactionId = new ObjectId(req.params.id);
    const db = getDb();
    const transaction = await db
      .collection<Transaction>("transactions")
      .findOne({ _id: transactionId });

    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    console.error("Error fetching transaction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const newTransaction: Transaction = req.body;
    const result = await db
      .collection<Transaction>("transactions")
      .insertOne(newTransaction);
    res.json(result);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const transactionId = new ObjectId(req.params.id);
    const db = getDb();
    const updatedTransaction: Transaction = req.body;
    const result = await db
      .collection<Transaction>("transactions")
      .updateOne({ _id: transactionId }, { $set: updatedTransaction });

    if (result.matchedCount > 0) {
      res.json({ message: "Transaction updated successfully" });
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    console.error("Error updating transaction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const transactionId = new ObjectId(req.params.id);
    const db = getDb();
    const result = await db
      .collection<Transaction>("transactions")
      .deleteOne({ _id: transactionId });

    if (result.deletedCount > 0) {
      res.json({ message: "Transaction deleted successfully" });
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
