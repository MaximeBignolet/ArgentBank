import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = useSelector((state: any) => state.auth.token);
  return token !== null ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default PrivateRoutes;
