const Paintings = require("../models/appModels/paintingModel");
const Checkout = require("../models/appModels/checkoutModel");
const Cart = require("../models/appModels/cartModel");
const Classics = require("../models/appModels/classicsModel");

exports.getPaintingData = async (req, res) => {
  try {
    const getResponse = await Paintings.find();
    if (getResponse) {
      res.status(200).json({
        status: true,
        message: "Data Fetched Successfully",
        paintings: getResponse,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Unable to Fetch Paintings",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error, message: "Error fetching Paintings" });
  }
};

exports.savePainting = async (req, res) => {
  try {
    const { paintingName, description, price, type, image } = req.body;
    let data = { paintingName, description, price, type, image };
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path, {
        folder: "paintings",
      });
      data.image = result.secure_url;
    }
    await Paintings.create(data);
    res.status(201).json({
      status: true,
      message: "Data Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error, message: "Error saving Paintings" });
  }
};

exports.saveCheckout = async (req, res) => {
  const {
    address,
    city,
    country,
    email,
    fullName,
    phoneNumber,
    product,
    zipCode,
  } = req.body;
  try {
    const data = {
      address,
      city,
      country,
      email,
      type: "checkout",
      fullName,
      phoneNumber,
      product,
      zipCode,
    };
    const createCheckout = await Checkout.create(data);
    if (createCheckout) {
      res.status(201).json({
        status: true,
        message: "Order Placed Successfully",
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Failed to place order",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error, message: "Error placing order" });
  }
};

exports.addCart = async (req, res) => {
  try {
    const { description, image, paintingName, price, rating, type } = req.body; // Array of products from the request body
    let quantity;
    const existingCart = await Cart.findOne({paintingName})
    if(existingCart) {
      quantity = existingCart.quantity + 1;
      await Cart.findOneAndUpdate({paintingName},{quantity},{new:true,upsert:true})
      return res.status(200).json({
        status: true, 
        message: "Product updated to cart",
      });
    }
    const data = { description, image, paintingName, price, rating, type, quantity:1 }
    const savedProducts = await Cart.create(data);
    if (savedProducts)
      res.status(201).json({
        status: true, 
        message: "Product added to cart",
      });
  } catch (error) {
    console.error("Error saving products:", error);
    res
      .status(500)
      .json({ status: false, message: "Failed to save products", error });
  }
};

exports.getCart = async (req, res) => {
  try {
    const savedProducts = await Cart.find();
    if (savedProducts)
      res.status(200).json({
        status: true,
        message: "Products fetched successfully",
        products: savedProducts,
      });
  } catch (error) {
    console.error("Error saving products:", error);
    res
      .status(500)
      .json({ status: false, message: "Failed to save products", error });
  }
};

exports.getClassicsData = async (req, res) => {
  try {
    const getResponse = await Classics.find();
    if (getResponse) {
      res.status(200).json({
        status: true,
        message: "Data Fetched Successfully",
        classics: getResponse,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Unable to Fetch Paintings",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error, message: "Error fetching Paintings" });
  }
};


exports.saveClassics = async (req, res) => {
  try {
    const { paintingName, description, price, type, image, rating } = req.body;
    let data = { paintingName, description, price, type, image, rating };
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path, {
        folder: "classics",
      });
      data.image = result.secure_url;
    }
    await Classics.create(data);
    res.status(201).json({
      status: true,
      message: "Data Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error, message: "Error saving Paintings" });
  }
};