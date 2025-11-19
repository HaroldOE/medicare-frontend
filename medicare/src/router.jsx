import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Index from "./pages/Index";
import PatientDashboard from "./pages/admin/patientDashboard"; // FIXED path
import SideBars from "./layout/SideBars"; // make sure this matches your filename

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/sidebars" element={<SideBars />} />
        <Route path="/patientdashboard" element={<PatientDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
