function ComparisonLeaderboard({ comparison }) {
  if (!comparison?.length) return null;

  const highest = comparison[0].maturityAmount;

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  const medal = ["🥇", "🥈", "🥉"];

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
          Performance Ranking
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Best Investment Returns
        </h2>
      </div>

      <div className="space-y-6">

        {comparison.map((bank, index) => {
          const percent =
            (bank.maturityAmount / highest) * 100;

          return (
            <div key={bank.shortName}>

              <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <span className="text-2xl">
                    {medal[index] || `#${index + 1}`}
                  </span>

                  <div>

                    <p className="font-bold text-slate-900">
                      {bank.bank}
                    </p>

                    <p className="text-sm text-slate-500">
                      {bank.interestRate}% Interest
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-xl font-bold text-slate-900">
                    {formatCurrency(bank.maturityAmount)}
                  </p>

                  <p className="text-sm text-emerald-600">
                    +{formatCurrency(bank.interestEarned)}
                  </p>

                </div>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-600 transition-all duration-700"
                  style={{
                    width: `${percent}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ComparisonLeaderboard;