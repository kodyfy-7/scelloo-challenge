const Product = require('../../models').Product
const Cart = require('../../models').Cart
const Coupon = require('../../models').Coupon
const Sequelize = require("sequelize");
const { randomNumber, checkTransIdExist } = require('../../middleware/randomNum')
const e = require('express');
require("dotenv").config();


// @desc    Populate cart with random data
// @route   GET /api/v1/cart/
// @access  Public
const showCart = async (req, res) => {
    const shoppingCart = []
    //refresh cart table || should be session
    Cart.destroy({
        where: {},
        truncate: true
    });
    const products = await Product.findAll({
        order: Sequelize.literal('RANDOM()'), limit: 2
    })

    transactionId= await checkTransIdExist(parseInt(randomNumber(1,999999)));
    for (var i = 0; i < products.length; i++) {
        quantity = await parseInt(randomNumber(1,5));
        amount = quantity * products[i].productPrice
        console.log(products[i].productPrrice);
        product = await Cart.create({
            transactionId: transactionId,
            productId: products[i].id,
            quantity: quantity,
            amount : amount
        })

        shoppingCart.push({ product })
    }

    const totalPrice = await Cart.sum('amount', { where: { transactionId } });
    let data =  [{totalPrice: `$${totalPrice}`, products: shoppingCart}]
    return res.status(200).json({
        success: true,
        message: "All cart items successfully fetched",
        data: data
    })    
}

// @desc    Validate coupon code and implement rules
// @route   GET /api/v1/cart//coupon
// @access  Public
const checkCoupon = async (req, res) => {
    const { tag, transactionId } = req.body

    // Check if coupon exists
    const coupon = await Coupon.findOne({where: {tag}})
    if(!coupon)
    {
        return res.status(404).json({
            success: false,
            message: "Invalid coupon",
        })  
    }

    // Sum amount of transaction, and quantity
    const sumAmount = await Cart.sum('amount', { where: { transactionId } });
    const sumQuantity = await Cart.sum('quantity', { where: { transactionId } });

    // Return error if transaction amount is less than the least amount of coupon
    if(sumAmount < coupon.minPrice)
    {
        return res.status(400).json({
            success: false,
            message: `Total amount must be at least $${coupon.minPrice}`,
        }) 
    }
    // Return error if transaction quantity is less than the least that of coupon
    if((coupon.minItem  < sumQuantity) && coupon.minItem > 0)
    {
        return res.status(400).json({
            success: false,
            message: `Quantity of cart items must be at least ${coupon.minItem}`,
        }) 
    }

    var newTotalAmount = 0
    var discount = 0

    // Implement rules for discount
    if(coupon.discountAmountOff != null && coupon.discountPercentOff != null)
    {
        if(coupon.minPrice === 200)
        {
            var amount1 = sumAmount - coupon.discountAmountOff 

            var discount = sumAmount * coupon.discountPercentOff / 100
            var amount2 = sumAmount - discount

            if(amount1 > amount2)
            {
                var newTotalAmount = amount1
            } else {
                var newTotalAmount = amount2
            }
        } else{
            var amount1 = sumAmount - coupon.discountAmountOff 
            var discount = amount1 * coupon.discountPercentOff / 100
            var newTotalAmount = amount1 - discount
        }
        
    } else {
        if(coupon.discountAmountOff != null)
        {
            var newTotalAmount = sumAmount - coupon.discountAmountOff 
            var discount = discountAmountOff
        }

        if(coupon.discountPercentOff != null)
        {
            var discount = sumAmount * coupon.discountPercentOff / 100
            var newTotalAmount = sumAmount - discount
        }
    }
    
    let data =  [{newTotalAmount: `$${newTotalAmount}`, discount: `$${discount}`}]
    return res.status(200).json({
        success: true,
        message: "Data successfully fetched",
        data: data
    })     
}

module.exports = {
    showCart,
    checkCoupon
}