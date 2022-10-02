const router = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  console.log(req.body);
  try {
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      username: req.body.username,
      name: req.body.name,
      password: hashPassword,
    });
    const savedUser = await user.save();
    console.log(req.body.username, "registered", savedUser);
    res.status(200).send("User created");
  } catch (err) {
    console.log(err);
    res.send(err).status(400);
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user)
    return res.status(400).send("Username or Password is Incorrect!");

  const validPass = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!validPass)
    return res.status(400).send("Username or Password is Incorrect!");

  res.status(200).send(user.name);
});

router.get("/steps/:username", async(req,res)=>{
    try{

        const user = await User.findOne({username:req.params.username})
        //console.log(user)
        res.send({steps: user.stepcounter, user:user})
    }catch(err){
        console.log(err)
    }
})


router.post("/steps/:username", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.params.username,
    });

    const totalsteps = user.stepcounter + req.body.steps;
    var myquery = { username: user.username };
    var newvalues = { $set: { stepcounter: totalsteps } };
    User.updateOne(myquery, newvalues, function (err, ress) {
      res.send("done");
    });
  } catch (err) {}
});
module.exports = router;
