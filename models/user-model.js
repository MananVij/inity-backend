const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Incorrect Email Id");
      }
    },
  },
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;
