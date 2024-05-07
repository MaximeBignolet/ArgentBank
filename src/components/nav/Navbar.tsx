import { NavLink } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <NavLink to={"sign-in"}>
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
