const OTP = require("../../models/schemas/loginOTP")

// module.exports
const loginOTP = async (otpData) => {
    try {
        const saveOTP = await new OTP(otpData).save();
        if (saveOTP) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = {
    loginOTP
};
