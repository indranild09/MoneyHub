import { getAllBanks } from "../services/bank.service.js";
import { successResponse } from "../utils/apiResponse.js";

export async function getBanks(req, res, next) {
  try {
    const banks = await getAllBanks();

    res.status(200).json(
      successResponse(banks, "Banks fetched successfully")
    );
  } catch (error) {
    next(error);
  }
}