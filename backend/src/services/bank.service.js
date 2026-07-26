import prisma from "../config/prisma.js";
import ApiError from "../utils/ApiError.js";

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



export async function getBank(shortName) {
  console.log("✅ NEW getBank() called:", shortName);

  const bank = await prisma.bank.findFirst({
    where: {
      shortName: shortName.toUpperCase(),
    },
    select: {
      id: true,
      name: true,
      shortName: true,
      logoUrl: true,
      website: true,
    },
  });

  if (!bank) {
    throw new ApiError(404, "Bank not found");
  }

  return bank;
}