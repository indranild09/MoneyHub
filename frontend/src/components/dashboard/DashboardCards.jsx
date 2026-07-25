import { useEffect, useState } from "react";
import { getBanks } from "../../api/bank.api";
import { getInterestRates } from "../../api/interestRate.api";

function DashboardCards() {
  const [stats, setStats] = useState({
    banks: 0,
    highestRate: 0,
    fdRates: 0,
    rdRates: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [banks, rates] = await Promise.all([
          getBanks(),
          getInterestRates(),
        ]);

        const highestRate = Math.max(
          ...rates.map((rate) => rate.interestRate)
        );

        const fdRates = rates.filter(
          (rate) => rate.depositType === "FD"
        ).length;

        const rdRates = rates.filter(
          (rate) => rate.depositType === "RD"
        ).length;

        setStats({
          banks: banks.length,
          highestRate,
          fdRates,
          rdRates,
        });
      } catch (error) {
        console.error("Failed to load dashboard stats", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  const cards = [
    {
      icon: "🏦",
      value: stats.banks,
      label: "Supported Banks",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: "📈",
      value: `${stats.highestRate}%`,
      label: "Highest Interest",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: "💰",
      value: stats.fdRates,
      label: "FD Rates",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🔄",
      value: stats.rdRates,
      label: "RD Rates",
      color: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div
              className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color} text-2xl text-white`}
            >
              {card.icon}
            </div>

            <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
              {loading ? "..." : card.value}
            </h2>

            <p className="mt-2 text-slate-500">
              {card.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DashboardCards;