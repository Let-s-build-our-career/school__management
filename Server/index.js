// i am moon
//  i am tahazzat
// I am Abu Bakar
// i am naimur
/* ---------- Hello I am Shourav Rajbongshi ------------ */
const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Server is ready for providing data!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});