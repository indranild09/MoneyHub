import { Router } from "express";

import bankRoutes from "./bank.routes.js";
import interestRateRoutes from "./interestRate.routes.js";
import calculatorRoutes from "./calculator.routes.js";
import healthRoutes from "./health.routes.js";
const router = Router();

router.use("/banks", bankRoutes);
router.use("/interest-rates", interestRateRoutes);
router.use("/calculator", calculatorRoutes);
router.use("/health", healthRoutes);

export default router;