import { ObjectId } from "mongodb";

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  name: string;
  avatar: string;
  last_login: Date | null;
  created_at: Date;
  updated_at: Date;
  transactions: Transaction[];
  goals: Goal[];
  friends: Friend[];
  notifications: Notification[];
  IOUs: IOU[];
}

export interface Transaction {
  id: string;
  user_id: ObjectId;
  amount: number;
  category?: string;
  description?: string;
  date: Date;
  type: "expense" | "income";
}

export interface Goal {
  id: string;
  user_id: ObjectId;
  name: string;
  target_amount: number;
  current_amount?: number;
  deadline?: Date;
}

export interface Friend {
  id: string;
  user_id: ObjectId;
  friend_id: ObjectId;
  status: "pending" | "accepted" | "declined";
}

export interface Notification {
  id: string;
  user_id: ObjectId;
  content: string;
  date: Date;
  read: boolean;
}

export interface IOU {
  id: string;
  lender_id: ObjectId;
  borrower_id: ObjectId;
  amount: number;
  date: Date;
  status: "unsettled" | "settled";
}
