//Root Controller//

const express=require("express");
const router=express.Router();

const login=require("./user/auth/login")();
const Products = require("./product/create")();
const verifyOTP = require("./otp/verifyOTP")();
const addtocart = require("./cartitem/addToCart")();
const order = require("./order/order")();



module.exports = () => {
   router.use("/user/auth", login); //localhost:3000/api/user/auth/login
   router.use("/product/create", Products); //localhost:3000/api/product/create/products
   router.use("/otp/verifyOTP", verifyOTP); //http://localhost:3000/api/otp/verifyOTP/verifyOTP
   router.use("/cartitem/addToCart", addtocart); //localhost:3000/api/cartitem/addToCart
   router.use("/order/order", order); //localhost:3000/api/order/order
   return router;
};