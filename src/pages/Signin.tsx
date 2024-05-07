import FormSignin from "../components/auth/FormSignIn";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
const SignIn = () => {
  return (
    <div>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <FormSignin />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
