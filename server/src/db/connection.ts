import { MongoClient, ServerApiVersion } from "mongodb";
require('dotenv').config({ path: '../.env' });

const uri = process.env.ATLAS_URI || '';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Successfully connected to MongoDB");
} catch (error) {
  console.error(error);
}

let db = client.db("db_crud_mern");
export default db;