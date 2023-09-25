const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  categoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  imageURL: { type: String, required: true },
  rating: { type: Number },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
