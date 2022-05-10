const mongoose = require("mongoose");
const collegeSchema = new mongoose.Schema({
  collegeName: {
    type: String,
  },
  location: {
    type: String,
  },
  specialization: {
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
