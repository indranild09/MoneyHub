import { getInterestRates } from "../services/interestRate.service.js";
import { successResponse } from "../utils/apiResponse.js";

export async function getInterestRatesController(req, res, next) {
  try {
    const filters = {
      bank: req.query.bank,
      depositType: req.query.depositType,
      customerType: req.query.customerType,
    };

    const interestRates = await getInterestRates(filters);

    return res.status(200).json(
      successResponse(
        interestRates,
        "Interest rates fetched successfully"
      )
    );
  } catch (error) {
    next(error);
  }
}