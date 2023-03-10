import express from "express";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/data", (req, res) => {
  pool.query("SELECT * FROM profiles", (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
