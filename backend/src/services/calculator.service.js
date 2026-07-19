import { getMatchingInterestRate } from "./interestRate.service.js";

export async function calculateReturns(data) {
  const {
    bank,
    depositType,
    customerType,
    amount,
    months,
  } = data;

  if (!bank) {
    throw new Error("Bank is required");
  }

  if (!depositType) {
    throw new Error("Deposit type is required");
  }

  if (!customerType) {
    throw new Error("Customer type is required");
  }

  if (!amount || amount <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  if (!months || months <= 0) {
    throw new Error("Months must be greater than 0");
  }

  const interestRate = await getMatchingInterestRate({
    bank,
    depositType,
    customerType,
    months,
  });

  if (!interestRate) {
    throw new Error("Interest rate not found");
  }

  if (depositType !== "FD") {
    throw new Error("RD calculation will be implemented next");
  }

  const rate = interestRate.interestRate / 100;
  const years = months / 12;

  const maturityAmount =
    amount * Math.pow(1 + rate / 4, 4 * years);

  const interestEarned = maturityAmount - amount;

  return {
    bank: interestRate.bank.name,
    depositType,
    customerType,
    principal: amount,
    tenureMonths: months,
    interestRate: interestRate.interestRate,
    interestEarned: Number(interestEarned.toFixed(2)),
    maturityAmount: Number(maturityAmount.toFixed(2)),
  };
}