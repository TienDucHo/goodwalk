const router = require("express").Router();
const Step = require("../models/StepModel");
const User = require("../models/UserModel");

router.post("/step/record", async (req, res) => {
  console.log(req.body);
  try {
    const step = new Step({
      username: req.body.username,
      stepcounter: req.body.step,
      start: req.body.start,
      end: req.body.end,
    });
    const savedStep = await step.save();
    console.log(savedStep);
    const user = await User.findOne({
      username: req.body.username,
    });
    const totalsteps = user.stepcounter + req.body.step;
    let myquery = { username: user.username };
    let newvalues = { $set: { stepcounter: totalsteps } };
    User.updateOne(myquery, newvalues, function (err, res) {});
    res
      .status(200)
      .send(JSON.stringify({ message: "Steps recorded" }));
  } catch (err) {
    console.log(err);
    res.send(err).status(400);
  }
});

module.exports = router;
