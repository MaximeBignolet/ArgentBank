import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import { removeToken } from "../../store/slices/AuthSlice";
import { NavLink } from "react-router-dom";
import { RouteHelper } from "../../helpers/routes-helper";
import { AppDispatch, RootState } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const NavbarConnected = () => {
  const dispatch: AppDispatch = useDispatch();
  const { firstName } = useSelector((state: RootState) => state.user);
  const onClickLogOut = () => {
    dispatch(removeToken());
  }

  return (
    <nav className="main-nav">
      <Logo />
      <div>
        <NavLink to={RouteHelper.userhome} className="main-nav-item">
          <FontAwesomeIcon icon={faUser} />
          {firstName}
        </NavLink>
        <NavLink
          to={RouteHelper.home}
          className="main-nav-item"
          onClick={onClickLogOut}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Sign Out
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarConnected;
