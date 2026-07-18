import prisma from "../config/prisma.js";

export async function getAllBanks() {
  return prisma.bank.findMany({
    select: {
      id: true,
      name: true,
      shortName: true,
      logoUrl: true,
      website: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}