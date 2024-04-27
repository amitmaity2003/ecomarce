const Order = require("../../models/schemas/Order");

const create=async(newOrder)=>{
    try{
        const savedOrder = await new Order(newOrder).save();
        if(savedOrder){
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