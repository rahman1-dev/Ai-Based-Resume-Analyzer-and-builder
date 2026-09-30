import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import interviewRouter from "./routes/interview.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

/*Using all the auth related routes here */
app.use("/api/auth", authRouter);

// Using interviewRouter
app.use("/api/interview", interviewRouter);

export default app;
