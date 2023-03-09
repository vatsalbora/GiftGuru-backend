import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  connectionString: "postgres://yvkmdeopnjwoqo:c051cfcccd1c290f251785d6aef2d9069abbf8b8edeb34add361043fbbaae827@ec2-52-54-212-232.compute-1.amazonaws.com:5432/d3bhdcrs7e1dga",
  ssl: { rejectUnauthorized: false },
});

export default pool;
