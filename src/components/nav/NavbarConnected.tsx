import { useDispatch } from "react-redux";
import Logo from "./Logo";
import { removeToken } from "../../store/slices/AuthSlice";
import { NavLink } from "react-router-dom";
import { RouteHelper } from "../../helpers/routes-helper";

const NavbarConnected = () => {
  const dispatch = useDispatch();

  function onClickLogOut() {
    dispatch(removeToken());
  }

  return (
    <nav className="main-nav">
      <Logo />
      <div>
        <a className="main-nav-item" href="./user.html">
          <i className="fa fa-user-circle"></i>
          Tony
        </a>
        <NavLink
          to={RouteHelper.home}
          className="main-nav-item"
          onClick={onClickLogOut}
        >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarConnected;
