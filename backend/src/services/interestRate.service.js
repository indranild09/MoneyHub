import prisma from "../config/prisma.js";

export async function getInterestRates(filters = {}) {
  const { bank, depositType, customerType } = filters;

  const where = {};

  // Filter by bank short name (e.g. SBI, HDFC)
  if (bank) {
    where.bank = {
      shortName: bank.toUpperCase(),
    };
  }

  // Filter by deposit type (FD / RD)
  if (depositType) {
    where.depositType = depositType.toUpperCase();
  }

  // Filter by customer type (GENERAL / SENIOR)
  if (customerType) {
    where.customerType = customerType.toUpperCase();
  }

  return prisma.interestRate.findMany({
    where,
    include: {
      bank: {
        select: {
          id: true,
          name: true,
          shortName: true,
          logoUrl: true,
          website: true,
        },
      },
    },
    orderBy: [
      {
        bank: {
          name: "asc",
        },
      },
      {
        minMonths: "asc",
      },
    ],
  });
}

export async function getMatchingInterestRate(filters) {
  const {
    bank,
    depositType,
    customerType,
    months,
  } = filters;

  return prisma.interestRate.findFirst({
    where: {
      bank: {
        shortName: bank.toUpperCase(),
      },
      depositType: depositType.toUpperCase(),
      customerType: customerType.toUpperCase(),

      minMonths: {
        lte: months,
      },

      maxMonths: {
        gte: months,
      },

      effectiveTo: null,
    },

    include: {
      bank: {
        select: {
          id: true,
          name: true,
          shortName: true,
          logoUrl: true,
          website: true,
        },
      },
    },
  });
}