const Product = require("../../models/schemas/products");

const addproduct=async(newproduct)=>{
    try{
        const productsave = await new Product(newproduct).save();
        if(productsave){
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
    addproduct
};
