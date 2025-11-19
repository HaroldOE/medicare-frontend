import { BrowserRouter, Route, Routes } from "react-router";
import CreateAccount from "./pages/CreateAccount";
import Index from "./pages/Index";
import PatientDashboard from "./pages/admin/patientDashboard";

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
