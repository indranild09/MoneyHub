import { getMatchingInterestRate } from "./interestRate.service.js";
import { getAllBanks } from "./bank.service.js";
import ApiError from "../utils/ApiError.js";

function calculateFD(amount, annualRate, months) {
  const rate = annualRate / 100;
  const years = months / 12;

  const maturityAmount =
    amount * Math.pow(1 + rate / 4, 4 * years);

  const interestEarned = maturityAmount - amount;

  return {
    interestEarned: Number(interestEarned.toFixed(2)),
    maturityAmount: Number(maturityAmount.toFixed(2)),
  };
}

function calculateRD(monthlyDeposit, annualRate, months) {
  const monthlyRate = annualRate / (12 * 100);

  let maturityAmount = 0;

  for (let i = 0; i < months; i++) {
    maturityAmount +=
      monthlyDeposit *
      Math.pow(1 + monthlyRate, months - i);
  }

  const totalInvestment = monthlyDeposit * months;
  const interestEarned = maturityAmount - totalInvestment;

  return {
    interestEarned: Number(interestEarned.toFixed(2)),
    maturityAmount: Number(maturityAmount.toFixed(2)),
  };
}

function calculateDeposit(
  depositType,
  amount,
  annualRate,
  months
) {
  if (depositType === "FD") {
    return calculateFD(amount, annualRate, months);
  }

  if (depositType === "RD") {
    return calculateRD(amount, annualRate, months);
  }

  throw new ApiError(400, "Invalid deposit type");
}

export async function calculateReturns(data) {
  const {
    bank,
    depositType,
    customerType,
    amount,
    months,
  } = data;

  const interestRate = await getMatchingInterestRate({
    bank,
    depositType,
    customerType,
    months,
  });

  if (!interestRate) {
    throw new ApiError(404, "Interest rate not found");
  }

  const calculation = calculateDeposit(
    depositType,
    amount,
    interestRate.interestRate,
    months
  );

  return {
    bank: interestRate.bank.name,
    depositType,
    customerType,
    principal:
      depositType === "FD"
        ? amount
        : amount * months,

    monthlyDeposit:
      depositType === "RD"
        ? amount
        : null,

    tenureMonths: months,
    interestRate: interestRate.interestRate,

    interestEarned: calculation.interestEarned,
    maturityAmount: calculation.maturityAmount,
  };
}

export async function compareReturns(data) {
  const {
    depositType,
    customerType,
    amount,
    months,
  } = data;

  const banks = await getAllBanks();

  const results = [];

  for (const bank of banks) {
    const interestRate =
      await getMatchingInterestRate({
        bank: bank.shortName,
        depositType,
        customerType,
        months,
      });

    if (!interestRate) {
      continue;
    }

    const calculation = calculateDeposit(
      depositType,
      amount,
      interestRate.interestRate,
      months
    );

    results.push({
      bank: bank.name,
      shortName: bank.shortName,

      interestRate:
        interestRate.interestRate,

      principal:
        depositType === "FD"
          ? amount
          : amount * months,

      interestEarned:
        calculation.interestEarned,

      maturityAmount:
        calculation.maturityAmount,
    });
  }

  if (results.length === 0) {
    throw new ApiError(
      404,
      "No matching interest rates found."
    );
  }

  results.sort(
    (a, b) => b.maturityAmount - a.maturityAmount
  );

  return results;
}