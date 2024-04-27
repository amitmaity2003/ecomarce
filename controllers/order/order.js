const express = require("express")
const router = express.Router();

const { order: orderService } = require("../../services/index");


module.exports = () => {
    router.post('/orders', async (req, res, next) => {
        try {
            const newOrder ={
                "userId": req.body.userId,
                "productId": req.body.productId,
                "addtocartId": req.body.addtocartId,
                "createdAt": Date.now()
            };

            const Order = await orderService.create(newOrder);
            if (Order) {
                res.json("Order successful");
              } else {
                res.json("Order failed");
              }

        } catch (error) {
            next(error);
        }
    });

    return router;
}