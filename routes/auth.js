const express = require("express");
const router = express.Router();
const studentSchema = require("../schema/studentSchema");

router.get("/", (req, res) => {
  res.send("home");
});
router.post("/student", async (req, res) => {
  try {
    const response = await studentSchema.findOne({ email: req.body.email });
    if (response) {
      res.status(500).send("use already exist");
    } else {
      console.log(req.body);
      const student = new studentSchema(req.body);
      await student.save();
      res.send("success");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
