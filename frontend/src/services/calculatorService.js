import { calculateFD, calculateRD } from "../utils/calculator";
import getInterestRate from "../utils/getInterestRate";

export function calculateDeposit({
  bank,
  depositType,
  customerType,
  amount,
  months,
}) {
  const rate = getInterestRate(
    bank,
    depositType,
    customerType,
    Number(months)
  );

  if (!rate) {
    return {
      error: "Interest rate not found.",
    };
  }

  const result =
    depositType === "FD"
      ? calculateFD(Number(amount), rate, Number(months))
      : calculateRD(Number(amount), rate, Number(months));

  return {
    rate,
    ...result,
  };
}