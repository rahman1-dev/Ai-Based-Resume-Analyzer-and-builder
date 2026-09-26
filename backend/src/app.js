import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

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

export default app;
