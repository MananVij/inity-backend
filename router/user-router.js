const express = require("express");
const app = express();
const router = new express.Router();

const User = require("../models/user-model.js");

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user
    .save()
    .then(() => {
      res.send(user);
      console.log(user);
    })
    .catch((e) => {
      console.log(e);
      res.send(e.message).status(401);
    });
});

module.exports = router;
