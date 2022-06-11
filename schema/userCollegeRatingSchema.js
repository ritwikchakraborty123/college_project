const mongoose = require("mongoose");
const userCollegeRatingSchema = new mongoose.Schema({
  collegeEmail: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
  },
  comment: {
    type: String,
  },
});
const userCollegeRatingModel = mongoose.model(
  "USERCOLLEGERATINGSCHEMA",
  userCollegeRatingSchema
);

module.exports = userCollegeRatingModel;
