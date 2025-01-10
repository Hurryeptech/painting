const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
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
      type: Number,
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
  
module.exports = mongoose.model("cart", cartSchema);