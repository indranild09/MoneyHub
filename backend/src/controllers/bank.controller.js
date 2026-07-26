import {
  getAllBanks,
  getBank,
} from "../services/bank.service.js";

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

export async function getBankByShortName(
  req,
  res,
  next
) {
  try {
    const bank = await getBank(
      req.params.shortName
    );

    res.status(200).json(
      successResponse(
        bank,
        "Bank fetched successfully"
      )
    );
  } catch (error) {
    next(error);
  }
}