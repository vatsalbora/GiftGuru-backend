const { Client } = require("pg");
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

client
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database", err));

// app.post('/save-data', (req, res) => {
//   const { input1, input2, input3 } = req.body;

//   client.query('INSERT INTO my_table (input1, input2, input3) VALUES ($1, $2, $3)', [input1, input2, input3], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error saving data to database');
//     } else {
//       res.status(200).send('Data saved to database');
//     }
//   });
// });
