import { useState } from "react";
import { loginUser } from "../../services/UserServices";
import { useNavigate } from "react-router-dom";

const FormSignin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleChangeInputSignIn(e: React.ChangeEvent<HTMLInputElement>) {
    e.currentTarget.id === "username"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  }

  async function handleFormSignInSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      if (user) {
        navigate("/");
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={handleFormSignInSumbit}>
      <div className="input-wrapper">
        <label>Username</label>
        <input type="text" id="username" onChange={handleChangeInputSignIn} />
      </div>
      <div className="input-wrapper">
        <label>Password</label>
        <input
          type="password"
          id="password"
          onChange={handleChangeInputSignIn}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label>Remember me</label>
      </div>
      <input type="submit" value="Sign In" className="sign-in-button" />
    </form>
  );
};

export default FormSignin;
