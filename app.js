const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: "./config.env" });
const DB = process.env.DB_URL;

mongoose
  .connect(DB)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("hellow");
});

app.listen(3000, () => {
  console.log("server started..");
});
