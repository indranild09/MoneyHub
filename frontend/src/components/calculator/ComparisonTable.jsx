import BankLogo from "../ui/BankLogo";
function ComparisonTable({ comparison }) {
  if (!comparison || comparison.length === 0) {
    return null;
  }

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);

  const getRankBadge = (index) => {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return `#${index + 1}`;
    }
  };

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Bank Comparison
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            Compare All Banks
          </h3>
        </div>

        <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          {comparison.length} Banks
        </span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-600">
                Rank
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-600">
                Bank
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-600">
                Interest Rate
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-600">
                Interest Earned
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold text-slate-600">
                Maturity Amount
              </th>

            </tr>

          </thead>

          <tbody>

            {comparison.map((bank, index) => (

              <tr
                key={bank.shortName}
                className={`border-t transition hover:bg-cyan-50 ${index === 0 ? "bg-amber-50" : ""
                  }`}
              >

                <td className="px-5 py-5 text-lg font-semibold">
                  {getRankBadge(index)}
                </td>

                <td className="px-5 py-5">

                  <div className="flex items-center gap-3">

                    <BankLogo
                      shortName={bank.shortName}
                      name={bank.bank}
                      size="h-11 w-11"
                    />

                    <div>
                      <p className="font-semibold text-slate-900">
                        {bank.bank}
                      </p>

                      <p className="text-sm text-slate-500">
                        {bank.shortName}
                      </p>
                    </div>

                  </div>

                </td>

                <td className="px-5 py-5">
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700">
                    {bank.interestRate}%
                  </span>
                </td>

                <td className="px-5 py-5 font-medium text-emerald-600">
                  {formatCurrency(bank.interestEarned)}
                </td>

                <td className="px-5 py-5 text-lg font-bold text-slate-900">
                  {formatCurrency(bank.maturityAmount)}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ComparisonTable;