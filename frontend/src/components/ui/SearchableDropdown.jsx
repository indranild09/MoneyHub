import Select from "react-select";
import BankLogo from "./BankLogo";

function SearchableDropdown({
  options,
  value,
  onChange,
  placeholder = "Search...",
}) {
  const selectedOption =
    options.find((option) => option.value === value) || null;

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(selected) => onChange(selected?.value || "")}
      placeholder={placeholder}
      isSearchable
      isClearable
      className="react-select-container"
      classNamePrefix="react-select"

      formatOptionLabel={(option) => (
        <div className="flex items-center gap-3 py-1">
          <BankLogo
  shortName={option.value}
  name={option.label}
  logoUrl={option.logoUrl}
  size="h-9 w-9"
/>

          <div>
            <p className="font-semibold text-slate-900">
              {option.label}
            </p>

            <p className="text-xs text-slate-500">
              {option.value}
            </p>
          </div>
        </div>
      )}

      styles={{
        control: (base, state) => ({
          ...base,
          minHeight: "60px",
          borderRadius: "16px",
          borderColor: state.isFocused ? "#06b6d4" : "#CBD5E1",
          boxShadow: state.isFocused
            ? "0 0 0 4px rgba(6,182,212,0.15)"
            : "none",
          paddingLeft: "6px",
          paddingRight: "6px",
          transition: "all .2s ease",
          "&:hover": {
            borderColor: "#06b6d4",
          },
        }),

        menu: (base) => ({
          ...base,
          borderRadius: "16px",
          overflow: "hidden",
          marginTop: "8px",
          zIndex: 9999,
          boxShadow:
            "0 10px 30px rgba(15,23,42,0.12)",
        }),

        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? "#06B6D4"
            : state.isFocused
            ? "#ECFEFF"
            : "#FFFFFF",
          color: state.isSelected ? "#FFFFFF" : "#0F172A",
          cursor: "pointer",
          padding: "10px 14px",
        }),

        singleValue: (base) => ({
          ...base,
          color: "#0F172A",
          fontWeight: 600,
        }),

        placeholder: (base) => ({
          ...base,
          color: "#64748B",
        }),

        indicatorSeparator: () => ({
          display: "none",
        }),

        dropdownIndicator: (base) => ({
          ...base,
          color: "#64748B",
          "&:hover": {
            color: "#06B6D4",
          },
        }),

        clearIndicator: (base) => ({
          ...base,
          color: "#64748B",
          "&:hover": {
            color: "#ef4444",
          },
        }),
      }}
    />
  );
}

export default SearchableDropdown;