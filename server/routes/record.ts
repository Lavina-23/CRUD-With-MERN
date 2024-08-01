import express, { type Request, type Response } from 'express';
import { ObjectId } from 'mongodb';
import db from "../db/connection";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  let collection = await db.collection("records");
  let result = await collection.find({}).toArray();
  res.send(result).status(200);
});

router.get("/:id", async (req: Request, res: Response) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not Found").status(404);
  else res.send(result).status(200);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    let newLink = {
      name: req.body.name,
      link_url: req.body.link_url,
    }

    let collection = await db.collection("records");
    let result = await collection.insertOne(newLink);
    res.send(result).status(204);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding record");
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        link_url: req.body.link_url,
      }
    }

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating record");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting record");
  }
});

export default router;