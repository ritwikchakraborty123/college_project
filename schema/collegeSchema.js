const mongoose = require("mongoose");
const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  domain: {
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
});
const collegeModel = mongoose.model("COLLEGE", collegeSchema);

module.exports = collegeModel;
