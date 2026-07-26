function BankLogo({
  shortName,
  name,
  logoUrl,
  size = "h-12 w-12",
}) {
  const logos = {
    SBI: "/logos/sbi.svg",
    HDFC: "/logos/hdfc.svg",
    ICICI: "/logos/icici.svg",
    AXIS: "/logos/axis.svg",
    KOTAK: "/logos/kotak.svg",
  };

  const logo = logoUrl || logos[shortName];

  if (logo) {
    return (
      <img
        src={logo}
        alt={name || shortName}
        className={`${size} rounded-xl border border-slate-200 bg-white object-contain p-1`}
      />
    );
  }

  return (
    <div
      className={`flex ${size} items-center justify-center rounded-xl bg-cyan-100 font-bold text-cyan-700`}
    >
      {shortName?.charAt(0)}
    </div>
  );
}

export default BankLogo;