import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
    }
});



const  sendMail = async (to,otp) => {
    await transporter.sendMail({
    from: process.env.USER_EMAIL,
    to: to,
    subject: "Reset Your Password",
   html: 
       `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Password Reset Request</h2>

            <p>Hello,</p>

            <p>
            We received a request to reset your password for your Virtual Courses account.
            </p>

            <p>Your OTP for password reset is:</p>

            <h1 style="letter-spacing: 5px;">
            ${otp}
            </h1>

            <p>
            This OTP is valid for <strong>5 minutes</strong>.
            </p>

            <p>
            If you did not request a password reset, please ignore this email.
            </p>

            <br>

            <p>
            Regards,<br>
            Virtual Courses Team
            </p>
        </div>
        `
});
}

export default sendMail