import express from "express"
import { googleAuth, login, logOut, resetPassword, sendOTP, signUp, verifyOTP } from "../controllers/authController.js"

const authRouter = express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/login",login)
authRouter.post("/logout",logOut)
authRouter.post("/sendOtp",sendOTP)
authRouter.post("/verifyOtp",verifyOTP)
authRouter.post("/resetPassword",resetPassword)
authRouter.post("/googleauth",googleAuth)

export default authRouter