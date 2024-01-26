import { MongoClient, Db } from "mongodb";

let client: MongoClient | undefined;
export let db: Db | undefined;

export const connectDb = async () => {
  if (!client) {
    const uri = process.env.DB_URI as string;
    const dbName = process.env.DB_NAME;
    try {
      const client = await MongoClient.connect(uri);
      db = client.db(dbName);
      console.log("MongoDB connected successfully!");
    } catch (error) {
      console.log(`
        Error during connecting to MongoDB: ${error}
        `);
      throw error;
    }
  } else {
    console.log("Database is already connected");
  }
};

export const getDb = () => {
  if (!db) {
    throw new Error("Database not connected!");
  }
  return db;
};
