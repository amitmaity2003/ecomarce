const express = require("express")
const router = express.Router();

const OTP = require("../../models/schemas/loginOTP")

module.exports = () => {

  router.post('/verifyOTP', async (req, res, next) => {
    try {
      const { email, otp } = req.body;

      const userOTP = await OTP.findOne({ email, otp });
      if (!userOTP) {
        return res.status(400).send('Invalid OTP');
      }

      await OTP.deleteOne({ email, otp });

      res.send('OTP verified successfully');
    }catch (error) {
      next(error);
    }
  });
  return router
}