import { useEffect, useState } from "react";
import { getInterestRates } from "../api/interestRate.api";
import BankLogo from "./ui/BankLogo";
function LatestRates() {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRates() {
      try {
        const data = await getInterestRates();

        // Show first 4 rates for now
        setRates(data.slice(0, 4));
      } catch (error) {
        console.error("Failed to load interest rates:", error);
      } finally {
        setLoading(false);
      }
    }

    loadRates();
  }, []);

  if (loading) {
    return (
      <section id="rates" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-slate-500">Loading latest interest rates...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="rates" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Latest Interest Rates
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Compare Current FD Interest Rates
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Live data fetched directly from the MoneyHub backend.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {rates.map((rate) => (

            <div
              key={rate.id}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Top */}

              <div className="flex items-start justify-between">

                <div className="flex items-center gap-4">

                  <BankLogo
                    shortName={rate.bank.shortName}
                    name={rate.bank.name}
                    size="h-14 w-14"
                  />

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {rate.bank.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {rate.customerType}
                    </p>
                  </div>

                </div>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {rate.depositType}
                </span>

              </div>

              {/* Rate */}

              <div className="mt-8">

                <p className="text-sm text-slate-500">
                  Interest Rate
                </p>

                <h2 className="mt-2 text-5xl font-extrabold text-cyan-600">
                  {rate.interestRate}%
                </h2>

              </div>

              {/* Bottom */}

              <div className="mt-8 flex items-center justify-between text-sm">

                <div>
                  <p className="text-slate-500">
                    Tenure
                  </p>

                  <p className="font-semibold">
                    {rate.minMonths} Months
                  </p>
                </div>

                <a
                  href={rate.bank.website}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan-600 hover:text-cyan-700"
                >
                  Visit →
                </a>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default LatestRates;