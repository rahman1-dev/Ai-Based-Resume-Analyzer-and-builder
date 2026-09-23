import UserModel from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

/**
 * @name registerUserController
 * @description Register a new user, expect username,email and password in body
 * @access Public
 */
async function registerUserController(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      msg: "Please provide all the fields",
    });
  }

  const existingUser = await UserModel.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    return res.status(400).json({ msg: "Account already exist" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser;
  if (!existingUser) {
    newUser = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log("User created while signup");
  }

  const token = jwt.sign(
    { id: newUser._id, username: newUser.username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  //Setting token in the clients browser
  res.cookie("token", token);

  res.status(201).json({
    msg: "User registered successfully",
    user: {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    },
  });
}

/**
 * @name loginUserController
 * @description login a user , expects email and password in req.body
 * @access Public
 */
async function loginUserController(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "Please provide email and password",
    });
  }

  //Then check whether the user already present in the db .
  const existingUser = await UserModel.findOne({ email });

  if (!existingUser) {
    return res.status(400).json({ msg: "Go and register first" });
  }

  const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordMatch) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: existingUser._id, username: existingUser.username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(200).json({
    msg: "User LoggedIn successfully",
    user: {
      id: existingUser._id,
      username: existingUser.username,
      email: existingUser.email,
    },
  });
}

export { registerUserController, loginUserController };
