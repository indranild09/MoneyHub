import express from "express";
import cors from "cors";

import bankRoutes from "./routes/bank.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "MoneyHub API",
    status: "Running",
    version: "1.0.0"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK"
  });
});

// API Routes
app.use("/api/v1/banks", bankRoutes);

export default app;