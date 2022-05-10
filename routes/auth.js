const express = require("express");
const router = express.Router();
const studentSchema = require("../schema/studentSchema");
const collegeSchema = require("../schema/collegeSchema");
const counsellorSchema = require("../schema/counsellorSchema");

router.get("/", (req, res) => {
  res.send("home");
});
router.post("/student", async (req, res) => {
  try {
    const response = await studentSchema.findOne({ email: req.body.email });
    if (response) {
      res.status(500).send("student already exist");
    } else {
      const student = new studentSchema(req.body);
      await student.save();
      res.send("success");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.post("/college", async (req, res) => {
  try {
    const response = await collegeSchema.findOne({ email: req.body.email });
    if (response) {
      res.status(500).send("college already exist");
    } else {
      const college = new collegeSchema(req.body);
      await college.save();
      res.send("success");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.post("/counsellor", async (req, res) => {
  try {
    const response = await counsellorSchema.findOne({ email: req.body.email });
    if (response) {
      res.status(500).send("counsellor already exist");
    } else {
      const counsellor = new counsellorSchema(req.body);
      await counsellor.save();
      res.send("success");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
