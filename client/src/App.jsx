import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/ManagerDashboard";
import SalesEngineerDashboard from "./pages/SalesEngineer";
import SalesQuotationForm from "./pages/SalesQuotationForm";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes> */}

      {/* <Dashboard /> */}
      {/* <SalesEngineerDashboard /> */}
      <SalesQuotationForm />
    </div>
  );
}

export default App;
