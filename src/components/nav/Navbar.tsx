import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { RouteHelper } from "../../helpers/routes-helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <Logo />
        <div>
          <NavLink to={RouteHelper.signIn}>
            <NavLink to={RouteHelper.signIn} className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </NavLink>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
