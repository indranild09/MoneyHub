import express from "express";
import cors from "cors";
import apiRoutes from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "MoneyHub API",
    status: "Running",
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

app.use("/api/v1", apiRoutes);


// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global Error Handler
app.use(errorHandler);

export default app;