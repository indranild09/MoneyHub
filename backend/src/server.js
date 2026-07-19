import dotenv from "dotenv";
import app from "./app.js";
import config from "./config/index.js";
dotenv.config();

app.listen(config.port, () => {
  console.log(
    `🚀 Server running on port ${config.port} (${config.nodeEnv})`
  );
});