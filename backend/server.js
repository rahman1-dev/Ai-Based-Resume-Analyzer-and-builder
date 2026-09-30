import dotenv from "dotenv";
import app from "./src/app.js";
import connectToDb from "./src/config/database.js";
dotenv.config();

await connectToDb();

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
