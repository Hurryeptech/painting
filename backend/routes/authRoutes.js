const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const { checkValidUser, FormsRegister, FormsLogin, verifyOTP } = authController;

router.get("/user/checkuser", checkValidUser);
router.get("/user/verifyotp", verifyOTP);

router.post("/user/register", FormsRegister);
router.post("/user/login", FormsLogin);

module.exports = router;
