const CartItem = require("../../models/schemas/cartItem")

const create=async(addToCartItem)=>{
    try{
        const savedCartItem = await new CartItem(addToCartItem).save();
        if(savedCartItem){
            return true;
        }
        else{
            return false;
        }
        
    }
    catch(error){
        console.log(error);
    }
};

module.exports = {
    create
};
