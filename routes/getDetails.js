const express = require("express");
const router = express.Router();
const studentSchema = require("../schema/studentSchema");
const collegeSchema = require("../schema/collegeSchema");
const counsellorSchema = require("../schema/counsellorSchema");

router.get("/student", async (req, res) => {
  try {
    const response = await studentSchema.findOne({ email: req.query.email });
    if (response) {
      let { name, email, specialization, contact } = response;
      res.json({ name, specialization, email, contact });
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/college", async (req, res) => {
  try {
    const response = await collegeSchema.findOne({ email: req.query.email });
    if (response) {
      let { collegeName, location, email, contact, specialization } = response;
      res.json({ collegeName, specialization, location, email, contact });
    } else {
      res.status(500).send("college doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/counsellor", async (req, res) => {
  try {
    const response = await counsellorSchema.findOne({ email: req.query.email });
    if (response) {
      let { name, email, contact, specialization } = response;
      res.json({ name, email, contact, specialization });
    } else {
      res.status(500).send("counsellor doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
