import { Router } from "express";
import { calculateReturnsController } from "../controllers/calculator.controller.js";
import validateCalculatorRequest from "../middleware/validateCalculatorRequest.js";
import {
  calculateReturnsController,
  compareReturnsController,
} from "../controllers/calculator.controller.js";

const router = Router();

router.post(
  "/",
  validateCalculatorRequest,
  calculateReturnsController
);

router.post(
  "/compare",
  validateCalculatorRequest,
  compareReturnsController
);

export default router;