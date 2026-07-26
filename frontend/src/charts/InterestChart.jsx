import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function InterestChart({ comparison }) {
  if (!comparison?.length) return null;

  const data = comparison.map((bank) => ({
    bank: bank.shortName,
    interest: Number(bank.interestEarned.toFixed(2)),
  }));

  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">

      <h3 className="mb-6 text-2xl font-bold text-slate-900">
        Interest Earned Comparison
      </h3>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="bank" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="interest"
            radius={[8, 8, 0, 0]}
            fill="#22c55e"
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default InterestChart;