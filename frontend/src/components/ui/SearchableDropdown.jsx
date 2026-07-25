import Select from "react-select";

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
      className="react-select-container"
      classNamePrefix="react-select"
      styles={{
        control: (base, state) => ({
          ...base,
          minHeight: "58px",
          borderRadius: "14px",
          borderColor: state.isFocused ? "#06b6d4" : "#CBD5E1",
          boxShadow: state.isFocused
            ? "0 0 0 4px rgba(6,182,212,0.15)"
            : "none",
          "&:hover": {
            borderColor: "#06b6d4",
          },
        }),

        menu: (base) => ({
          ...base,
          borderRadius: "14px",
          overflow: "hidden",
          zIndex: 9999,
        }),

        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused
            ? "#ECFEFF"
            : state.isSelected
            ? "#06B6D4"
            : "#fff",
          color: state.isSelected ? "#fff" : "#0F172A",
          cursor: "pointer",
        }),

        placeholder: (base) => ({
          ...base,
          color: "#64748B",
        }),

        singleValue: (base) => ({
          ...base,
          color: "#0F172A",
          fontWeight: 500,
        }),
      }}
    />
  );
}

export default SearchableDropdown;