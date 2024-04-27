const User = require("../../../models/schemas/user");
const jwt = require("jsonwebtoken");

refreshToken = "amit maity payranagati amarshi Elrising Technology Cervices Pvt LTD";
accessToken = "maity amity payranagati amarshi Elrising Technology Cervices Pvt LTD";
const create = async (data) => {
    try {

        const existingUser = await User.findOne({ email: data.email });

        if (existingUser) {
            const updatedUser = await User.findOneAndUpdate({ email: data.email }, data, { new: true });
            const payload = {
                "id": updatedUser.id,
                "email": updatedUser.email,
                "user_type": updatedUser.user_type
            }
            const createAccessToken = jwt.sign(payload, accessToken, {});
            if (!createAccessToken) {
                return {
                    "status": false,
                    "data": "login faild"
                };
            }
            const createRefreshToken = jwt.sign(payload, refreshToken, {});
            if (!createRefreshToken) {
                return {
                    "status": false,
                    "data": "login faild"
                };
            }
            const transformedData = {
                "Message": " User login successfully",
                "id": updatedUser.id,
                "email": updatedUser.email,
                "user_type": updatedUser.user_type,
                "access_token": createAccessToken,
                "refresh_token": createRefreshToken
            }

            if (updatedUser) {
                // console.log("User login successfully");
                return {
                    "status": true,
                    "data": transformedData
                };

            } else {
                return {
                    "status": false,
                    "data": "login faild"
                };

            }
        } else {
            // If user with the same email doesn't exist, create a new user
            const newUser = await new User(data).save();
            const payload = {
                "id": newUser.id,
                "email": newUser.email,
                "user_type": newUser.user_type
            };
            const createAccessToken = jwt.sign(payload, accessToken, {});
            if (!createAccessToken) {
                return {
                    "status": false,
                    "data": "login faild"
                };
            }
            const createRefreshToken = jwt.sign(payload, refreshToken, {});
            if (!createRefreshToken) {
                return {
                    "status": false,
                    "data": "login faild"
                };
            }
            const transformedData = {
                "Message": " User login successfully",
                "id": newUser.id,
                "email": newUser.email,
                "user_type": newUser.user_type,
                "access_token": createAccessToken,
                "refresh_token": createRefreshToken
            }
            if (transformedData) {
                // console.log("New user created successfully");
                return {
                    "status": true,
                    "data": transformedData
                };
            } else {
                // console.log("Failed to create new user");
                return {
                    "status": false,
                    "data": "login faild"
                };
            }
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    create
};
