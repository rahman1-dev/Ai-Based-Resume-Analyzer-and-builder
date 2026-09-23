import express from "express";
import {
  loginUserController,
  registerUserController,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

/**
 * @route POST api/auth/register
 * @description register a new user
 * @access Public
 */
authRouter.post("/register", registerUserController);

/**
 * @route POST api/auth/login
 * @description login a new user with email and password
 * @access Public
 */
authRouter.post("/login", loginUserController);

export default authRouter;
