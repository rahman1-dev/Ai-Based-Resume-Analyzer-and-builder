import dotenv from "dotenv";
import app from "./src/app.js";
import connectToDb from "./src/config/database.js";
import generateInvterviewReport from "./src/services/ai.service.js";
import {
  resume,
  selfDescription,
  jobDescription,
} from "./src/services/temp.js";

dotenv.config();

await connectToDb();
await generateInvterviewReport({ resume, selfDescription, jobDescription });
// await invokeGeminiAi();

const PORT = process.env.PORT_NO || 3000;
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log("server is listening on port", PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
startServer();
