import { getMatchingInterestRate } from "./interestRate.service.js";

function validateInput(data) {
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

  validateInput(data);

  const interestRate = await getMatchingInterestRate({
    bank,
    depositType,
    customerType,
    months,
  });

  if (!interestRate) {
    throw new Error("Interest rate not found");
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
  throw new Error("Invalid deposit type");
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