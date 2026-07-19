import { getMatchingInterestRate } from "./interestRate.service.js";
import ApiError from "../utils/ApiError.js";
import { getAllBanks } from "./bank.service.js";
function validateInput(data) {
  const {
    bank,
    depositType,
    customerType,
    amount,
    months,
  } = data;

  if (!bank) {
    throw new ApiError(400, "Bank is required");
  }

  if (!depositType) {
    throw new ApiError("Deposit type is required");
  }

  if (!customerType) {
    throw new ApiError("Customer type is required");
  }

  if (!amount || amount <= 0) {
    throw new ApiError("Amount must be greater than 0");
  }

  if (!months || months <= 0) {
    throw new ApiError("Months must be greater than 0");
  }
}

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

export async function calculateReturns(data) {
  const {
    bank,
    depositType,
    customerType,
    amount,
    months,
  } = data;

export async function compareReturns(data) {
  const banks = await getAllBanks();
  const {
  depositType,
  customerType,
  amount,
  months,
} = data;

   const results = [];

  for (const bank of banks) {

  }
}

  const interestRate = await getMatchingInterestRate({
    bank,
    depositType,
    customerType,
    months,
  });

  if (!interestRate) {
    throw new ApiError(404, "Interest rate not found");
  }

  let calculation;

if (depositType === "FD") {
  calculation = calculateFD(
    amount,
    interestRate.interestRate,
    months
  );
} else if (depositType === "RD") {
  calculation = calculateRD(
    amount,
    interestRate.interestRate,
    months
  );
} else {
  throw new ApiError(400, "Invalid deposit type");
}

const { interestEarned, maturityAmount } = calculation;

  return {
    bank: interestRate.bank.name,
    depositType,
    customerType,
    principal: depositType === "FD" ? amount : amount * months,

monthlyDeposit: depositType === "RD" ? amount : null,
    tenureMonths: months,
    interestRate: interestRate.interestRate,
    interestEarned: Number(interestEarned.toFixed(2)),
    maturityAmount: Number(maturityAmount.toFixed(2)),
  };
}