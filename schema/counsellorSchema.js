const mongoose = require("mongoose");
const counsellorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
  },
  location: {
    type: String,
  },
});
const counsellorModel = mongoose.model("COUNSELLOR", counsellorSchema);

module.exports = counsellorModel;
