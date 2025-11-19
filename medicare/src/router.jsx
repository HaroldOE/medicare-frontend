import { BrowserRouter, Route, Routes } from "react-router";
import CreateAccount from "./pages/CreateAccount";
import Index from "./pages/Index";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
