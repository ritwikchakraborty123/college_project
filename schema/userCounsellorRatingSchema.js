const mongoose = require("mongoose");
const userCounsellorRatingSchema = new mongoose.Schema({
  counsellorEmail: {
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
const userCounsellorRatingModel = mongoose.model(
  "USERCOUNSELLORRATINGSSCHEMA",
  userCounsellorRatingSchema
);

module.exports = userCounsellorRatingModel;
