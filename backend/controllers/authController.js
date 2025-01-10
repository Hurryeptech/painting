const Account = require("../models/userModels/accountModel");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const sendMail = require("../utils/sendEmail");
const SendToken = require("../utils/sendToken");

exports.checkValidUser = async (req, res) => {
  const { email } = req.query;

  try {
    const isValidUser = await Account.findByEmail(email);
    const Otp = crypto.randomInt(100000, 999999);
    const otpExpires = new Date(Date.now() + 30 * 60 * 1000);
    let subject, content, options;
    if (isValidUser) {
      content = `<p>Hi User,</p><p>We recieved a OTP request for login to your account, your OTP provided below and this OTP expires in 30 minutes</p><p>OTP:&nbsp;${Otp}</p><br/><p>If any queries please contact hurryep tech</p></p>`;
      subject = `OTP for Account Login`;
      options = {
        subject: subject,
        to: email,
        content: content,
      };
      const sendEmail = await sendMail(options);
      const updateUser = await Account.findOneAndUpdate(
        { email },
        { Otp, otpExpires },
        { new: true }
      );
      if (updateUser && sendEmail)
        res
          .status(200)
          .json({ status: true, new: false, message: "OTP Sent to your Mail" });
    } else {
      content = `<p>Hi User,</p><p>We recieved a OTP request for account creation, your OTP provided below and this OTP expires in 30 minutes</p><p>OTP:&nbsp;${Otp}</p><br/><p>If any queries please contact hurryep tech</p></p>`;
      subject = `OTP for Account Creation`;
      options = {
        subject: subject,
        to: email,
        content: content,
      };
      const sendEmail = await sendMail(options);
      const createUser = await Account.create({
        email,
        Otp,
        otpExpires,
        status: "Deactive",
      });
      if (sendEmail && createUser)
        res
          .status(200)
          .json({ status: true, new: true, message: "OTP Sent to your Mail" });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ status: false, message: error.message });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { Otp } = req.query;
    const verifyUser = await Account.findOne({ Otp });
    if (verifyUser) {
      if (verifyUser.otpExpires < new Date()) {
        return res.status(400).json({ status: false, message: "OTP Expired" });
      }
      const updateUser = await Account.findOneAndUpdate(
        { Otp },
        { Otp: "", status: "Active" },
        { new: true }
      );
      if (updateUser)
        res.status(200).json({ status: true, message: "OTP Verified" });
    } else res.status(400).json({ status: false, message: "Invalid OTP" });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.FormsRegister = async (req, res) => {
  const { email, userName, password } = req.body;
  try {
    const hPassword = await bcrypt.hash(password, 10);
    const createUser = await Account.findOneAndUpdate(
      { email },
      {
        userName,
        password: hPassword,
      },
      { new: true }
    );
    const data = { userName, email };
    if (createUser) {
      SendToken(data, res, "User Registration Success");
    } else {
      res.status(400).json({ status: true, message: "Failed to Register" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.FormsLogin = async (req, res) => {
  const { userName, email, password, Otp, loginType } = req.body;
  let data, subject, content;

  try {
    const user = await Account.findOne({ email, status: "Active" });

    // Authenticate Crendentials
    if (Otp && Otp !== user.Otp) {
      res.status(400).json({ status: false, message: "Invalid OTP" });
    }
    if (password && password !== "") {
      if (!user || !(await user.isValidatePassword(password))) {
        res.status(400).json({ status: false, message: "Invalid Credentials" });
      }
    }
    if (userName && email) data = { userName, email };
    else data = { userName: user.userName, email: user.email };
    // Login User
    if (user && loginType) {
      return SendToken(user, res, "Login successful!");
    }
    if (!user && !loginType) {
      return res.status(401).json({ status: false, message: "No user Found" });
    }
    if (loginType && !user) {
      console.log("Google Login");

      const uPassword = (
        userName +
        "@" +
        crypto.randomInt(10, 100)
      ).toLowerCase();
      const hPassword = await bcrypt.hash(uPassword, 10);
      const createUser = await Account.create({
        email,
        userName,
        loginType,
        status: "Active",
        password: hPassword,
      });
      subject = "User Account Registration";
      content = `<p>Hi ${userName},</p><p>Your account was created successfully for our H-Forms and your credentials provided below</p><br/><p>Email:&nbsp;${userEmail}</p><p>Password:&nbsp;<b>${uPassword}</b></p>`;

      const data = {
        subject: subject,
        to: userEmail,
        content: content,
      };
      const sendEmail = await sendMail(data);
      if (createUser && sendEmail) {
        SendToken(data, res, "Login Successful");
      }
    } else {
      if (!user.userName)
        res
          .status(400)
          .json({ status: false, message: "Please Register your Account" });
      else if (user.status !== "Active")
        res
          .status(400)
          .json({ status: false, message: "Please Activate your Account" });
      else {
        await Account.findOneAndUpdate(
          { email },
          { Otp: "" },
          { new: true, upsert: true }
        );
        SendToken(data, res, "Login Successful");
      }
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.checkValidUser = async (req, res) => {
  const { email } = req.query;

  try {
    const isValidUser = await Account.findByEmail(email);
    const Otp = crypto.randomInt(100000, 999999);
    const otpExpires = new Date(Date.now() + 30 * 60 * 1000);
    let subject, content, options;
    if (isValidUser) {
      content = `<p>Hi User,</p><p>We recieved a OTP request for login to your account, your OTP provided below and this OTP expires in 30 minutes</p><p>OTP:&nbsp;${Otp}</p><br/><p>If any queries please contact hurryep tech</p></p>`;
      subject = `OTP for Account Login`;
      options = {
        subject: subject,
        to: email,
        content: content,
      };
      const sendEmail = await sendMail(options);
      const updateUser = await Account.findOneAndUpdate(
        { email },
        { Otp, otpExpires },
        { new: true }
      );
      if (updateUser && sendEmail)
        res
          .status(200)
          .json({ status: true, new: false, message: "OTP Sent to your Mail" });
    } else {
      content = `<p>Hi User,</p><p>We recieved a OTP request for account creation, your OTP provided below and this OTP expires in 30 minutes</p><p>OTP:&nbsp;${Otp}</p><br/><p>If any queries please contact hurryep tech</p></p>`;
      subject = `OTP for Account Creation`;
      options = {
        subject: subject,
        to: email,
        content: content,
      };
      const sendEmail = await sendMail(options);
      const createUser = await Account.create({
        email,
        Otp,
        otpExpires,
        status: "Deactive",
      });
      if (sendEmail && createUser)
        res
          .status(200)
          .json({ status: true, new: true, message: "OTP Sent to your Mail" });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ status: false, message: error.message });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { Otp } = req.query;
    const verifyUser = await Account.findOne({ Otp });
    if (verifyUser) {
      if (verifyUser.otpExpires < new Date()) {
        return res.status(400).json({ status: false, message: "OTP Expired" });
      }
      const updateUser = await Account.findOneAndUpdate(
        { Otp },
        { Otp: "", status: "Active" },
        { new: true }
      );
      if (updateUser)
        res.status(200).json({ status: true, message: "OTP Verified" });
    } else res.status(400).json({ status: false, message: "Invalid OTP" });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.FormsRegister = async (req, res) => {
  const { email, userName, password } = req.body;
  try {
    const hPassword = await bcrypt.hash(password, 10);
    const createUser = await Account.findOneAndUpdate(
      { email },
      {
        userName,
        password: hPassword,
      },
      { new: true }
    );
    const data = { userName, email };
    if (createUser) {
      SendToken(data, res, "User Registration Success");
    } else {
      res.status(400).json({ status: true, message: "Failed to Register" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.FormsLogin = async (req, res) => {
  const { userName, email, password, Otp, loginType } = req.body;
  let data, subject, content;

  try {
    const user = await Account.findOne({ email, status: "Active" });

    // Authenticate Crendentials
    if (Otp && Otp !== user.Otp) {
      res.status(400).json({ status: false, message: "Invalid OTP" });
    }
    if (password && password !== "") {
      if (!user || !(await user.isValidatePassword(password))) {
        res.status(400).json({ status: false, message: "Invalid Credentials" });
      }
    }
    if (userName && email) data = { userName, email };
    else data = { userName: user.userName, email: user.email };
    // Login User
    if (user && loginType) {
      return SendToken(user, res, "Login successful!");
    }
    if (!user && !loginType) {
      return res.status(401).json({ status: false, message: "No user Found" });
    }
    if (loginType && !user) {
      console.log("Google Login");

      const uPassword = (
        userName +
        "@" +
        crypto.randomInt(10, 100)
      ).toLowerCase();
      const hPassword = await bcrypt.hash(uPassword, 10);
      const createUser = await Account.create({
        email,
        userName,
        loginType,
        status: "Active",
        password: hPassword,
      });
      subject = "User Account Registration";
      content = `<p>Hi ${userName},</p><p>Your account was created successfully for our H-Forms and your credentials provided below</p><br/><p>Email:&nbsp;${userEmail}</p><p>Password:&nbsp;<b>${uPassword}</b></p>`;

      const data = {
        subject: subject,
        to: userEmail,
        content: content,
      };
      const sendEmail = await sendMail(data);
      if (createUser && sendEmail) {
        SendToken(data, res, "Login Successful");
      }
    } else {
      if (!user.userName)
        res
          .status(400)
          .json({ status: false, message: "Please Register your Account" });
      else if (user.status !== "Active")
        res
          .status(400)
          .json({ status: false, message: "Please Activate your Account" });
      else {
        await Account.findOneAndUpdate(
          { email },
          { Otp: "" },
          { new: true, upsert: true }
        );
        SendToken(data, res, "Login Successful");
      }
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
