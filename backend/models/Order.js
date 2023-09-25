const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
  status: { type: String },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

