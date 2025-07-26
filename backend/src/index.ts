import "dotenv/config";
import express from "express";
import { dbClient } from "backend/db/client.js";

const app = express();

// Query
app.get("/todo", async (req, res, next) => {
  try {
    const results = await dbClient.query.todoTable.findMany();
    res.json(results);
  } catch (err) {
    next(err);
  }
});

// Running app
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
});
