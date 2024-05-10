import { NavLink } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";
import { RouteHelper } from "../../helpers/routes-helper";

const Logo = () => {
  return (
    <NavLink to={RouteHelper.home} className="main-nav-logo">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
  );
};

export default Logo;
