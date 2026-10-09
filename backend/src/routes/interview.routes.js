import express from "express";
import { Router } from "express";
import authMiddlewar from "../middlewares/auth.middlewar.js";
import interviewController from "../controllers/interview.controller.js";
import upload from "../middlewares/file.middleware.js";

const interviewRouter = Router();

/**
 * @route POST jobDescription
 * @description generate the interview report on the basis of user's self description, job description, resume pdf
 * @access Private
 */
interviewRouter.post(
  "/",
  authMiddlewar,
  upload.single("resume"),
  interviewController.generateInterviewReportController,
);

/**
 * @route GET api/interview/report/:interviewId
 * @description get the interview report on the basis of interviewId
 * @access Private
 */
interviewRouter.get(
  "/report/:interviewId",
  authMiddlewar,
  interviewController.getInterviewReportByIdController,
);

/**
 * @route GET api/interview/
 * @description get all the interview reports of the logged in user
 * @access Private
 */
interviewRouter.get("/", authMiddlewar, interviewController.getAllInterviewReport);

export default interviewRouter;
