const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  count: {
    // required: true,
    type: Number,
    default: 0
  },
},{
    timestamps: true
});

const userAgreed = mongoose.model("userAgreed", userSchema);
module.exports = userAgreed;