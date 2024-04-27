const nodemailer = require('nodemailer');

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

const sendOTP = async function sendOTP(email) {
    try {
        const otp = generateOTP();

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "maitymaity539@gmail.com",
                pass: "kdqk geol egft opds",
            }
        });

        // Setup email data
        let mailOptions = {
            from: "amitmaity973504@gmail.com",
            to: email,
            subject: 'OTP Verification Code',
            text: `Your OTP verification code is: ${otp}`
        };

        let info = await transporter.sendMail(mailOptions);

        return otp; 
    } catch (error) {
        console.error(error);
    }
}


module.exports = sendOTP;
