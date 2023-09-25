const express = require('express');
const router = express.Router();
const cartController = require('../controllers/carts');

router.post('/', cartController.createCart);
router.get('/:userId', cartController.getCartByUserID);
router.post('/:userId/add/:productID', cartController.addProductToCart);
router.delete('/:userID/remove/:productID', cartController.removeProductFromCart);

module.exports = router;
