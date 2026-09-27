import dotenv from "dotenv";
import app from "./src/app.js";
import connectToDb from "./src/config/database.js";
// import invokeGeminiAi from "./src/services/ai.service.js";
dotenv.config();

connectToDb();
// await invokeGeminiAi();

const PORT = process.env.PORT_NO;
app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
