function ComparisonTable({ comparison }) {
  if (!comparison || comparison.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 rounded-2xl border bg-white p-5 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">
        Compare All Banks
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Rank</th>
              <th className="py-2 text-left">Bank</th>
              <th className="py-2 text-left">Rate</th>
              <th className="py-2 text-left">Interest</th>
              <th className="py-2 text-left">Maturity</th>
            </tr>
          </thead>

          <tbody>
            {comparison.map((bank, index) => (
              <tr
                key={bank.shortName}
                className="border-b"
              >
                <td className="py-3">
                  {index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : index === 2
                    ? "🥉"
                    : index + 1}
                </td>

                <td>{bank.bank}</td>

                <td>{bank.interestRate}%</td>

                <td>
                  ₹
                  {bank.interestEarned.toLocaleString(
                    "en-IN"
                  )}
                </td>

                <td className="font-semibold text-green-600">
                  ₹
                  {bank.maturityAmount.toLocaleString(
                    "en-IN"
                  )}
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