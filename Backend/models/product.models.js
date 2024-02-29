const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    requireed: true,
  },
  name: {
    type: String,
    requireed: true,
  },
  image: {
    type: String,
    requireed: true,
  },
  category: {
    type: String,
    requireed: true,
  },
  new_price: {
    type: Number,
    requireed: true,
  },
  old_price: {
    type: Number,
    requireed: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
},{timestamps:true});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
