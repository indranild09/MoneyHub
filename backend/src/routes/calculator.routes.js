import { Router } from "express";
import { calculateReturnsController } from "../controllers/calculator.controller.js";

const router = Router();

router.post("/", calculateReturnsController);

export default router;