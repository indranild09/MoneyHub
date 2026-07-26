import { Router } from "express";
import {
  getBanks,
  getBankByShortName,
} from "../controllers/bank.controller.js";

const router = Router();

router.get("/", getBanks);

router.get("/:shortName", getBankByShortName);

export default router;