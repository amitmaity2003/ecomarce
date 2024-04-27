//root service//

module.exports = {
    "login": require("./user/auth/login"),
    "otp": require("./otp/otp"),
    "Product": require("./product/create"),
    "cartItem": require("./cartitem/addToCart"),
    "order": require("./order/order")
};