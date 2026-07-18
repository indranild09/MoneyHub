import { getAllBanks } from "../services/bank.service.js";

export async function getBanks(req, res, next) {
  try {
    const banks = await getAllBanks();

    res.status(200).json({
      success: true,
      data: banks,
    });
  } catch (error) {
    next(error);
  }
}