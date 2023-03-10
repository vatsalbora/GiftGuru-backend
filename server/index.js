import express from "express";
// import dotenv from "dotenv";
import pool from "./db.js";

// dotenv.config();
const PORT = 3001;

const app = express();
app.use(express.json());

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

app.get("/get_profiles", (req, res) => {
  try {
    pool.query("SELECT DISTINCT name, state, email FROM profiles WHERE email=$1 limit 5;", [req.query.username]).then(data => {
        res.json(data["rows"]);
    });
  } catch (error) {
    res.send(error);
  }
});

app.put("/get_profiles", (req, res) => {
  try {
  pool.query("INSERT INTO public.\"profiles\" (name, state, email) VALUES ($1, $2, $3);", [req.body.name, req.body.state, req.body.email], (error) => {
    if (error) {
      throw error;
    }
    res.json({});
  });
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
