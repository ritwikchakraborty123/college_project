const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
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
});
const studentModel = mongoose.model("STUDENT", studentSchema);

module.exports = studentModel;
