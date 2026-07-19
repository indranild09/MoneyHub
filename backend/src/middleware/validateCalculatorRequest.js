import ApiError from "../utils/ApiError.js";

export default function validateCalculatorRequest(req, res, next) {
  const {
    bank,
    depositType,
    customerType,
    amount,
    months,
  } = req.body;

  if (!bank) {
    return next(new ApiError(400, "Bank is required"));
  }

  if (!depositType) {
    return next(new ApiError(400, "Deposit type is required"));
  }

  if (!customerType) {
    return next(new ApiError(400, "Customer type is required"));
  }

  if (!amount || amount <= 0) {
    return next(new ApiError(400, "Amount must be greater than 0"));
  }

  if (!months || months <= 0) {
    return next(new ApiError(400, "Months must be greater than 0"));
  }

  next();
}