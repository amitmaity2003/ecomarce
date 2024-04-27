const express = require("express");
const router = express.Router();
const { cartItem: cartItemService } = require("../../services/index");

module.exports = () => {
    router.post('/cart', async (req, res, next) => {
        try {
            const addToCartItem = {
                "id": req.body.id,
                "userId": req.body.userId,
                "productId": req.body.productId,
                "category": req.body.category,
                "count": req.body.count
            };

            const createCartItem = await cartItemService.create(addToCartItem);

            if (createCartItem) {
                res.json("Product is add to cart");
            } else {
                res.json("Product add failed");
            }
        } catch (error) {
            next(error);
        }
    });
   
    return router;
}