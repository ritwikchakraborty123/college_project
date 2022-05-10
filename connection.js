const mongoose = require("mongoose");
const DB = process.env.DB_URL;

mongoose
  .connect(DB)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));
