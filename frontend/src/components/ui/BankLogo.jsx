import sbiLogo from "../../assets/logo/sbi.svg";
import hdfcLogo from "../../assets/logo/hdfc.svg";
import iciciLogo from "../../assets/logo/icici.svg";
import axisLogo from "../../assets/logo/axis.svg";
import kotakLogo from "../../assets/logo/kotak.svg";

function BankLogo({
  shortName,
  name,
  logoUrl,
  size = "h-12 w-12",
}) {
const logos = {
  SBI: sbiLogo,
  HDFC: hdfcLogo,
  ICICI: iciciLogo,
  AXIS: axisLogo,
  KOTAK: kotakLogo,
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