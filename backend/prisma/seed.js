import { PrismaClient } from "@prisma/client";

import banks from "./seed-data/banks.js";
import interestRates from "./seed-data/interestRates.js";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing data
  await prisma.interestRate.deleteMany();
  await prisma.bank.deleteMany();

  // Insert banks
  const createdBanks = {};

  for (const bank of banks) {
    const createdBank = await prisma.bank.create({
      data: bank,
    });

    createdBanks[bank.shortName] = createdBank;
  }

  // Insert interest rates
  for (const rate of interestRates) {
    const bank = createdBanks[rate.bankShortName];

    if (!bank) {
      throw new Error(`Bank not found: ${rate.bankShortName}`);
    }

    await prisma.interestRate.create({
      data: {
        bankId: bank.id,
        depositType: rate.depositType,
        customerType: rate.customerType,
        minMonths: rate.minMonths,
        maxMonths: rate.maxMonths,
        interestRate: rate.interestRate,
        effectiveFrom: new Date(),
      },
    });
  }

  console.log("✅ Database seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });