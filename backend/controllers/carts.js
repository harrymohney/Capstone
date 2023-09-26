const Cart = require('../models/Cart');

const createCart = async (req, res) => {
  try {
    const newCart = new Cart({
      userID: req.body.userID,
    });
    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the cart' });
  }
};

const getCartByUserID = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userID: req.params.userID });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the cart' });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userID: req.params.userID });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const product = await Product.findById(req.params.productID);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const existingItem = cart.items.find((item) => item.product.equals(product._id));

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({
        product: product._id,
        quantity: 1,
      });
    }

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Could not add the product to the cart' });
  }
};

const removeProductFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userID: req.params.userID });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex((item) => item.product.equals(req.params.productID));

    if (itemIndex !== -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Could not remove the product from the cart' });
  }
};

module.exports = {
  createCart,
  getCartByUserID,
  addProductToCart,
  removeProductFromCart,
};