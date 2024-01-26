import { Express } from "express";
import * as userController from "./controllers/users";
import * as transactionController from "./controllers/transaction";
import * as goalController from "./controllers/goals";
import * as friendController from "./controllers/friends";
import * as notificationController from "./controllers/notifications";
import * as iouController from "./controllers/iou";

const routes = (app: Express): void => {
  // User Routes
  app.get("/users", userController.getAllUsers);
  app.post("/users/login", userController.loginUser);
  app.get("/users/:id", userController.getUserById);
  app.post("/users", userController.createUser);
  app.put("/users/:id", userController.updateUser);
  app.delete("/users/:id", userController.deleteUser);

  // // Transaction Routes
  // app.get("/transactions", transactionController.getAllTransactions);
  // app.get("/transactions/:id", transactionController.getTransactionById);
  // app.post("/transactions", transactionController.createTransaction);
  // app.put("/transactions/:id", transactionController.updateTransaction);
  // app.delete("/transactions/:id", transactionController.deleteTransaction);

  // // Goal Routes
  // app.get("/goals", goalController.getAllGoals);
  // app.get("/goals/:id", goalController.getGoalById);
  // app.post("/goals", goalController.createGoal);
  // app.put("/goals/:id", goalController.updateGoal);
  // app.delete("/goals/:id", goalController.deleteGoal);

  // // Friend Routes
  // app.get("/friends", friendController.getAllFriends);
  // app.get("/friends/:id", friendController.getFriendById);
  // app.post("/friends", friendController.createFriend);
  // app.put("/friends/:id", friendController.updateFriend);
  // app.delete("/friends/:id", friendController.deleteFriend);

  // // Notification Routes
  // app.get("/notifications", notificationController.getAllNotifications);
  // app.get("/notifications/:id", notificationController.getNotificationById);
  // app.post("/notifications", notificationController.createNotification);
  // app.put("/notifications/:id", notificationController.updateNotification);
  // app.delete("/notifications/:id", notificationController.deleteNotification);

  // // IOU Routes
  // app.get("/ious", iouController.getAllIOUs);
  // app.get("/ious/:id", iouController.getIOUById);
  // app.post("/ious", iouController.createIOU);
  // app.put("/ious/:id", iouController.updateIOU);
  // app.delete("/ious/:id", iouController.deleteIOU);
};

export default routes;
