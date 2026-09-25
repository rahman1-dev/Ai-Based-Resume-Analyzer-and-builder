import express from "express";
import {
  getMeController,
  loginUserController,
  logoutUserController,
  registerUserController,
} from "../controllers/auth.controller.js";
import authMiddlewar from "../middlewares/auth.middlewar.js";

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

/**
 * @route GET api/auth/logout
 * @description clear token from the cookie and add token in the black list
 * @access Public
 */
authRouter.get("/logout", logoutUserController);

/**
 * @route GET api/auth/get-me
 * @description get the current logedIn user details
 * @access Private
 */
authRouter.get("/get-me", authMiddlewar, getMeConctroller);

export default authRouter;
