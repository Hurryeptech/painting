const express = require("express");
const multer = require('multer');
const fs = require("fs");
const path = require("path");
const router = express.Router();
const userController = require("../controllers/userController");

const { getPaintingData, savePainting, saveCheckout,addCart,
  getCart,saveClassics,
  getClassicsData } =
userController;

const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Saving file to:", uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
    console.log("Generating unique filename:", uniqueName);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });
router.get("/user/getpainting", getPaintingData);
router.post("/user/savepainting",upload.single('image'), savePainting);


router.post("/user/classics",upload.single('image'), saveClassics);
router.get("/user/getclassics", getClassicsData);

router.post("/user/checkout", saveCheckout);
router.get("/user/getcart", getCart);
router.post("/user/addcart", addCart);




module.exports = router;
