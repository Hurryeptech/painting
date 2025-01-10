const mongoose = require("mongoose");

const paintingSchema = new mongoose.Schema({
  paintingName: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  rating:{
    type:String,
    required:false
  },
  price: {
    type: String,
    required: false,
  },
  image:{
    type:String,
    required:false
  },
  type:{
    type:String,
    required:false
  },
});


module.exports = mongoose.model("painting", paintingSchema);
