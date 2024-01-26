import express, { Express } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { connectDb } from "./db";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const execute = async () => {
  try {
    await connectDb();
    routes(app);

    app.listen(port, () => {
      console.log(`
       Server is running at http://localhost:${port}
      `);
    });
  } catch (error) {
    console.error("Error during server setup:", error);
  }
};

execute();
