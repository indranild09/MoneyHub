export function calculateFD(principal, rate, months) {
  const years = months / 12;

  const maturity =
    principal * Math.pow(1 + rate / 100, years);

  const interest = maturity - principal;

  return {
    maturity,
    interest,
  };
}

export function calculateRD(monthlyDeposit, rate, months) {
  const monthlyRate = rate / 12 / 100;

  const maturity =
    monthlyDeposit *
    ((Math.pow(1 + monthlyRate, months) - 1) /
      monthlyRate) *
    (1 + monthlyRate);

  const totalInvestment = monthlyDeposit * months;

  const interest = maturity - totalInvestment;

  return {
    maturity,
    interest,
  };
}