// cartItem.js

const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;
