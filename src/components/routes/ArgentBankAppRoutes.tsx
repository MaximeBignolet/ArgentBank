import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import SignIn from "../../pages/Signin";
import UserHome from "../../pages/UserHome";
import PrivateRoutes from "./PrivateRoutes";
const ArgentBankAppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/user-home" element={<UserHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ArgentBankAppRoutes;
