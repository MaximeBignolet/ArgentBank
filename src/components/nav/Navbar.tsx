import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { RouteHelper } from "../../helpers/routes-helper";

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <Logo />
        <div>
          <NavLink to={RouteHelper.signIn}>
            <p className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
