const Product = require('../models/Product');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: 'Product not found' });
    }
  },

  createProduct: async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ error: 'Invalid request' });
    }
  },

  // updateProduct: async (req, res) => {
  //   try {
  //     const updatedProduct = await Product.findByIdAndUpdate(
  //       req.params.productId,
  //       req.body,
  //       { new: true }
  //     );
  //     res.json(updatedProduct);
  //   } catch (error) {
  //     res.status(404).json({ error: 'Product not found' });
  //   }
  // },

  // deleteProduct: async (req, res) => {
  //   try {
  //     await Product.findByIdAndRemove(req.params.productId);
  //     res.status(204).send();
  //   } catch (error) {
  //     res.status(404).json({ error: 'Product not found' });
  //   }
  // },
};

module.exports = productController;