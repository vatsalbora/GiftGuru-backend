import pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg;
dotenv.config();
const password = process.env.PASSWORD;
console.log(password);
const pool = new Pool({
  connectionString: `postgres://yvkmdeopnjwoqo:${password}@ec2-52-54-212-232.compute-1.amazonaws.com:5432/d3bhdcrs7e1dga`,
  ssl: { rejectUnauthorized: false },
});

export default pool;
