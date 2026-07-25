import { Router } from "express";

import validateCalculatorRequest from "../middleware/validateCalculatorRequest.js";
import validateCompareRequest from "../middleware/validateCompareRequest.js";

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
  validateCompareRequest,
  compareReturnsController
);

export default router;