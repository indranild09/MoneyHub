function CustomerType({ value, onChange }) {
    return (
        <div>
            <label className="mb-2 block font-semibold text-slate-700">
                Customer Type
            </label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            >
                <option>Regular</option>
                <option>Senior Citizen</option>
            </select>
        </div>
    );
}

export default CustomerType;