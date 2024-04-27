// otp.js
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    otp: Number,
    createdAt: {
        type: Date,
        required: false
    }
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;
