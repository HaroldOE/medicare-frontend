import { BrowserRouter, Route, Routes } from "react-router";

import RoleSelection from "./pages/RoleSelection";
import { default as DocCreateAccount } from "./pages/doctors/CreateAccount";
import DocPasswordReset from "./pages/doctors/DocPasswordReset";
import DocVerifyPassword from "./pages/doctors/DocVerifyPassword";
import { default as DocLogin } from "./pages/doctors/Login";
import PatCreateAccount from "./pages/patients/CreateAccount";
import PatLogin from "./pages/patients/Login";
import PatPasswordReset from "./pages/patients/PatPasswordReset";
import PatVerifyPassword from "./pages/patients/PatVerifyPassword";

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
