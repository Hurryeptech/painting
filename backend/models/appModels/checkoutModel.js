const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  paintingName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
const checkoutSchema = new mongoose.Schema({
  address: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  type:{
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  fullName: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  zipcode: {
    type: String,
    required: false,
  },
  product: [productSchema],
});

module.exports = mongoose.model("checkout", checkoutSchema);
