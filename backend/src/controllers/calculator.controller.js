import { calculateReturns } from "../services/calculator.service.js";
import { successResponse } from "../utils/apiResponse.js";

export async function calculateReturnsController(req, res, next) {
  try {
    const result = await calculateReturns(req.body);

    return res.status(200).json(
      successResponse(result, "Calculation completed successfully")
    );
  } catch (error) {
    next(error);
  }
}