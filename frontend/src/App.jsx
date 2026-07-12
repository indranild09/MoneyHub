import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import BankDetails from "./pages/BankDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/bank/:id" element={<BankDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

