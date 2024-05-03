import { NavLink } from "react-router-dom";
import logo from "../assets/images/argentBankLogo.png";
import Footer from "../components/Footer";
const SignIn = () => {
  return (
    <div>
      <nav className="main-nav">
        <NavLink to={"/"}>
          <p className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </p>
        </NavLink>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label>Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label>Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>

            <a href="./user.html" className="sign-in-button">
              Sign In
            </a>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
