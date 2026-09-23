import dotenv from "dotenv";
import app from "./src/app.js";
import connectToDb from "./src/config/database.js";
dotenv.config();

connectToDb();

const PORT = process.env.PORT_NO;
app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
