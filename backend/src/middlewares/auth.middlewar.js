import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import BlackListTokenModel from "../models/blacklist.model.js";
dotenv.config();

async function authMiddlewar(req, res, next) {
  console.log("Middleware ran::");

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      msg: "Token not provided",
    });
  }

  const isTokenBlackListed = await BlackListTokenModel.findOne({ token });

  if (isTokenBlackListed) {
    return res.status(401).json({
      msg: "Token is invalid",
    });
  }

  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token", error: error.message });
  }
}

export default authMiddlewar;
