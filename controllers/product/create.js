const { Product: ProductService } = require("../../services/index");
const express = require("express");
const router = express.Router();
const token = require("../../middlewares/token");
const Product = require("../../models/schemas/products");

module.exports = () => {

  router.post('/products', token.jwtAuth, async (req, res, next) => {
    try {
      console.log(user.id);
      if (!user || user.user_type !== "admin") {
        return res.json({
          "status": false,
          "message": "You have no access to this page"
        });
      } else {
        const newProduct = {
          "userId": user.id,
          "id": req.body.id,
          "productname": req.body.productname,
          "description": req.body.description,
          "productprice": req.body.productprice,
          "productcategory": req.body.productcategory,
          "productoffer": req.body.productoffer,
          "createdAt": Date.now()
        };

        try {
          const createProduct = await ProductService.addproduct(newProduct);

          if (createProduct) {
            return res.json({
              "status": true,
              "message": "Product add successful"
            });
          } else {
            return res.json({
              "status": false,
              "message": "Product add failed"
            });
          }
        } catch (error) {
          console.error("Error adding product:", error);
          return res.status(500).json({
            "status": false,
            "message": "Internal Server Error"
          });
        }
      }
    } catch (error) {
      next(error);
    }
  });

  router.patch('/products/:productId', token.jwtAuth, async (req, res, next) => {
    try {
      if (!user || user.user_type !== "admin") {
        return res.json({
          "status": false,
          "message": "You have no access to this page"
        });
      } else {
      const productId = Product.id;
      const updates = req.body;
      const options = { new: true };

      const updatedProduct = await Product.findOneAndUpdate({ ProductId: productId }, updates, options);

      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json(updatedProduct);
    }
    } catch (error) {
      next(error);
    }
  });

  router.delete('/products/:productId', token.jwtAuth, async (req, res, next) => {
    try {
      if (!user || user.user_type !== "admin") {
        return res.json({
          "status": false,
          "message": "You have no access to this page"
        });
      } else {
        const productId = Product.id;
        const deletedProduct = await Product.findOneAndDelete({ ProductId: productId });

      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json({ message: 'Product deleted successfully' });
    }
    } catch (error) {
      next(error);
    }
  });

  router.get('/products', async (req, res, next) => {
    try {
      const products = await Product.find();
      if (!products) {
        return res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      next(error);
    }
  });

  router.get('/products/:productId', async (req, res, next) => {
    try {
      const productId = req.body.productId;
      const product = await Product.findOne({ ProductId: productId });

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      next(error);
    }
  });

  router.get('/products/:productcategory', async (req, res, next) => {
    try {
      const productcategory = req.body.productcategory;
      const product = await Product.findOne({ productcategory: productcategory });

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      next(error);
    }
  });


  return router;
}