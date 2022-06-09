const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors());
dotenv.config({ path: "./config.env" });

require("./connection");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/getDetails"));
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server started..");
});
