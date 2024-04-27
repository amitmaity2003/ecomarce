const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    id: String,
    productname: String,
    description: String,
    productprice: Number,
    productcategory: String,
    productoffer: Number,
    "createdAt": {
        "type": Date,
        "required": false
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
