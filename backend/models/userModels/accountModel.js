const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter UserEmail"],
  },
  password: {
    type: String,
    required: false,
  },
  Otp: {
    type: String,
    required: false,
  },
  otpExpires: {
    type: Date,
  },
  status: {
    type: String,
    required: [true, "Please Enter Status"],
  },
  loginType: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    select: false,
    required: false,
    // unique: true,
  },
});

userSchema.methods.isValidatePassword = function (enPassword) {
  return bcrypt.compare(enPassword, this.password);
};

userSchema.statics.findByEmail = async function (email) {
  return await this.findOne({ email });
};

module.exports = mongoose.model("user", userSchema);
