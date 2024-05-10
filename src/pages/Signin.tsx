import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormSignin from "../components/auth/FormSignIn";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const SignIn = () => {
  return (
    <div>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
          <h1>Sign In</h1>
          <FormSignin />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
