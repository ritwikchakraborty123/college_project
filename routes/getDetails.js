const express = require("express");
const router = express.Router();
const studentSchema = require("../schema/studentSchema");
const collegeSchema = require("../schema/collegeSchema");
const counsellorSchema = require("../schema/counsellorSchema");
const userCounsellorRatingSchema = require("../schema/userCounsellorRatingSchema");
const userCollegeRatingSchema = require("../schema/userCollegeRatingSchema");

router.get("/student", async (req, res) => {
  try {
    const response = await studentSchema.find({});
    if (response) {
      let resList = [];
      response.forEach((e) => {
        let { name, email, areaofinterest, location, contact } = e;
        resList.push({ name, email, areaofinterest, location, contact });
      });
      res.json(resList);
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/student/:email", async (req, res) => {
  try {
    const response = await studentSchema.findOne({ email: req.params.email });
    if (response) {
      let { name, email, areaofinterest, location, contact } = response;
      res.json({ name, email, areaofinterest, location, contact });
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/college", async (req, res) => {
  try {
    const response = await collegeSchema.find({});
    if (response) {
      let resList = [];
      response.forEach((e) => {
        let { name, location, email, domain, contact } = e;
        resList.push({ name, location, email, domain, contact });
      });
      res.json(resList);
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/college/:email", async (req, res) => {
  try {
    const response = await collegeSchema.findOne({ email: req.params.email });
    if (response) {
      let { name, location, email, domain, contact } = response;
      res.json({ name, location, email, domain, contact });
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/counsellor", async (req, res) => {
  try {
    const response = await counsellorSchema.find({});
    if (response) {
      let resList = [];
      response.forEach((e) => {
        let { name, location, email, domain, contact } = e;
        resList.push({ name, location, email, domain, contact });
      });
      res.json(resList);
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/counsellor/:email", async (req, res) => {
  try {
    const response = await counsellorSchema.findOne({
      email: req.params.email,
    });
    if (response) {
      let { name, location, email, domain, contact } = response;
      res.json({ name, location, domain, email, contact });
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/collegerating/:email", async (req, res) => {
  try {
    const response = await userCollegeRatingSchema.find({
      collegeEmail: req.params.email,
    });
    if (response) {
      res.json(response);
    } else {
      res.status(500).send("college rating doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/counsellorrating/:email", async (req, res) => {
  try {
    const response = await userCounsellorRatingSchema.find({
      counsellorEmail: req.params.email,
    });
    if (response) {
      res.json(response);
    } else {
      res.status(500).send("student doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
