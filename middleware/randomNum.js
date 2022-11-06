const Sequelize = require("sequelize");
const Cart = require("../models").Cart;

exports.checkTransIdExist = async (transactionId) =>  { 
    const checkId = await Cart.findOne({
        where:{transactionId},
        attributes:["transactionId"]
        })
    if(!checkId){
        return numSize(transactionId,6);
    }else{
        return numSize(transactionId,6);
    }
} 
exports.randomNumber = (min, max) =>  { 
    return Math.random() * (max - min) + min;
} 
  
const numSize = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}