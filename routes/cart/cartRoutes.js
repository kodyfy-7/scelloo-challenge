const express = require("express");
const router = express.Router();
const { showCart, checkCoupon } = require('../../controllers/cart/cartController')

router.route('/').get(showCart)  
router.route('/coupon').post(checkCoupon)  

module.exports = router;