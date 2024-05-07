import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import SignIn from "../../pages/Signin";

const ArgentBankAppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ArgentBankAppRoutes;
