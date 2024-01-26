import { Request, Response } from "express";
import { getDb } from "../db";
import { ObjectId } from "mongodb";
import { User } from "../interface";
import bcrypt from "bcrypt";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const users = await db.collection<User>("users").find().toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = new ObjectId(req.params.id);
    const db = getDb();
    const user = await db.collection<User>("users").findOne({ _id: userId });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const db = getDb();
    const { username, password, email, name } = req.body;
    if (!username || !email || !password || !name) {
      res.status(400).json({
        status: "failed",
        message: "Username, email, password, and name are mandatory fields",
      });
      return;
    }
    const existingUser = await db.collection<User>("users").findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      res.status(400).json({
        status: "failed",
        message: "User with the same username or email already exists",
      });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: "",
      username,
      password: hashedPassword,
      email,
      name,
      avatar: "",
      transactions: [],
      goals: [],
      friends: [],
      notifications: [],
      IOUs: [],
      last_login: null,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const result = await db.collection<User>("users").insertOne(newUser);
    console.log(result);
    res.status(200).json({
      status: "success",
      message: "User created seccessfully.",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const db = getDb();
    const { email, username, password } = req.body;

    const user: User | null = await db.collection<User>("users").findOne({
      $or: [{ email }, { username }],
    });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.status(200).json({
          status: "success",
          message: "Login successful",
          user,
        });
      } else {
        res.status(401).json({
          status: "failed",
          message: "Invalid credentials",
        });
      }
    } else {
      res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = new ObjectId(req.params.id);
    const db = getDb();
    const updatedUser: User = req.body;
    const result = await db
      .collection<User>("users")
      .updateOne({ _id: userId }, { $set: updatedUser });

    if (result.matchedCount > 0) {
      res.json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = new ObjectId(req.params.id);
    const db = getDb();
    const result = await db
      .collection<User>("users")
      .deleteOne({ _id: userId });

    if (result.deletedCount > 0) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
