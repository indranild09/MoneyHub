import BankLogo from "../ui/BankLogo";

function CalculatorResult({ result }) {
  if (!result) return null;

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">
          <BankLogo
            shortName={result.bank.split(" ")[0].toUpperCase()}
            name={result.bank}
            size="h-14 w-14"
          />

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-600">
              Calculation Result
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              {result.bank}
            </h3>
          </div>
        </div>

        <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          {result.depositType}
        </span>

      </div>

      {/* Summary */}

      <div className="mt-8 grid gap-4">

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

          <span className="text-slate-600">
            Principal Amount
          </span>

          <span className="font-semibold text-slate-900">
            {formatCurrency(result.principal)}
          </span>

        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

          <span className="text-slate-600">
            Interest Rate
          </span>

          <span className="font-semibold text-cyan-700">
            {result.interestRate}%
          </span>

        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

          <span className="text-slate-600">
            Interest Earned
          </span>

          <span className="font-bold text-emerald-600">
            {formatCurrency(result.interestEarned)}
          </span>

        </div>

      </div>

      {/* Highlight */}

      <div className="mt-8 rounded-2xl bg-linear-to-r from-cyan-600 to-blue-600 p-6 text-white">

        <p className="text-sm uppercase tracking-wider text-cyan-100">
          Maturity Amount
        </p>

        <h2 className="mt-2 text-4xl font-extrabold">
          {formatCurrency(result.maturityAmount)}
        </h2>

      </div>

    </div>
  );
}

export default CalculatorResult;