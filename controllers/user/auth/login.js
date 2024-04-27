const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { login: loginService } = require("../../../services/index");
const { otp: otpService } = require("../../../services/index");
const sendOTP = require("../../../nodemailer/sendOTP");
const crypto = require("crypto");

module.exports = () => {
    router.post("/login", async (req, res, next) => {
        try {
            const {id, email, password, user_type } = req.body;
            const hashedPassword = await bcrypt.hash(password, 8);

            const data = {
                id,
                email,
                user_type,
                password: hashedPassword,
                createdAt: Date.now()
            };

            const otp = await sendOTP(email);

            const otpData = {
                user: email,
                otp,
                createdAt: Date.now()
            };
            await otpService.loginOTP(otpData);

            const user = await loginService.create(data);

            if (user) {
                res.status(200).json(user.data);
            } else {
                res.status(500).json(user.data);
            }
        } catch (error) {
            next(error);
        }
    });
    return router;
};
