import banks from "../data/banks";

function getInterestRate(
  bankName,
  depositType,
  customerType,
  months
) {
  const bank = banks.find((b) => b.name === bankName);

  if (!bank) return null;

  const type =
    depositType === "FD" ? "fd" : "rd";

  const customer =
    customerType === "Senior Citizen"
      ? "senior"
      : "regular";

  const rates = bank[type][customer];

  const slab = rates.find(
    (r) =>
      months >= r.minMonths &&
      months <= r.maxMonths
  );

  return slab ? slab.rate : null;
}

export default getInterestRate;