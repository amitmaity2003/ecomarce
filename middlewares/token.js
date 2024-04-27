const jwt = require("jsonwebtoken");
const User = require("../models/schemas/user");
require("dotenv").config();
const accessToken = "maity amity payranagati amarshi Elrising Technology Cervices Pvt LTD"


const jwtAuth = async (req, res, next) => {
    if (req.headers.authorization) {
        try {
            const [scheme, token] = req.headers?.authorization.split(" ");
            if ((scheme !== "Bearer") && !(token)) {
                res.json({
                    "status": "falseStatus",
                    "message": "errorUnauthorized"
                });
            } else {
                const result = jwt.verify(token, accessToken);
                if (!(result) && (result === null)) {
                    res.json({
                        "status":"falseStatus",
                        "message":"errorUnauthorized"
                    });
                } else {
                    result["token"] = token;
                    req.user = result;
                    console.log(req.user);
                    next();
                }
            }
        } catch (error) {
            console.log(error);
            res.json({
                "status":"falseStatus",
                "message": "errorSessionExpire"
            });
        }
    } else {
        res.json({
            "status": "falseStatus",
            "message": "errorUnauthorized"
        });
    }
};
module.exports = {
    jwtAuth
}