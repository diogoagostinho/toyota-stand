import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_CONNECTION;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const db = client.db("toyota");
const admin = client.db("admin");
const collections = await db.listCollections().toArray();

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB -> Toyota");
    console.log("Collections: ", collections);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
