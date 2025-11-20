import { BrowserRouter, Route, Routes } from "react-router";
import CreateAccount from "./pages/CreateAccount";
import Index from "./pages/Index";
import PatientDashboard from "./pages/admin/patientDashboard"; // FIXED path
import SideBars from "./Components/SideBars"; // make sure this matches your filename
import AdminLayout from "./Components/AdminLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Index />} /> */}

        <Route path="/" element={<RoleSelection />} />

        {/* Doctor Login Route */}
        <Route path="/doclogin" element={<DocLogin />} />
        <Route path="/doccreate" element={<DocCreateAccount />} />
        <Route path="/docpassreset" element={<DocPasswordReset />} />
        <Route path="/docverifypass" element={<DocVerifyPassword />} />
        {/* Patient Login Route */}
        <Route path="/patlogin" element={<PatLogin />} />
        <Route path="/patcreate" element={<PatCreateAccount />} />
        <Route path="/patpassreset" element={<PatPasswordReset />} />
        <Route path="/patverifypass" element={<PatVerifyPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
