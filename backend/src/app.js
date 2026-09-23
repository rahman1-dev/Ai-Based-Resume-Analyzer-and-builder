import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

/*Using all the auth related routes here */
app.use("/api/auth", authRouter);

export default app;
