import { Router } from "express";
import { getInterestRatesController } from "../controllers/interestRate.controller.js";

const router = Router();

router.get("/", getInterestRatesController);

export default router;