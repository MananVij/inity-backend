const express = require("express");
const app = express();
const router = new express.Router();

const UserAgreed = require("../models/user-agreed-model.js");
const User = require("../models/user-model.js");

router.get('/agreed', async (req, res) => {

  const filter = {}
  const userAgreed = await UserAgreed.find(filter)
  if(userAgreed.length === 0) {
    UserAgreed.create({useragreeds:[{count: 0}]}, (err, res) => {
      if(err) {
        console.log(err)
        return
      } 
    })
    console.log('created first set')
    res.send('created first set')
    return
  }
  else {
    await UserAgreed.findOneAndUpdate (
      {count: {$gte: 0}},
      {$inc: {count: 1}}
    )
    res.send('incremented')
    console.log('incremented')
  }
})

module.exports = router;