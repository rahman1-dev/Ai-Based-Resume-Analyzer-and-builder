import express from "express";
import { Router } from "express";
import authMiddlewar from "../middlewares/auth.middlewar";
import interviewController from "../controllers/interview.controller";

const interviewRouter = Router();

/**
 * @route POST api/interview
 * @description generate the interview report on the basis of user's self description, job description, resume pdf
 * @access Private
 */
interviewRouter.post(
  "/",
  authMiddlewar,
  interviewController.generateInterviewReportController,
);

export default interviewRouter;
