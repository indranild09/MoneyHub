import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MoneyHub
        </Link>

        <div className="flex gap-8">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/compare" className="hover:text-blue-600">
            Compare
          </Link>

          <Link to="/" className="hover:text-blue-600">
            FD Calculator
          </Link>

          <Link to="/" className="hover:text-blue-600">
            RD Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;