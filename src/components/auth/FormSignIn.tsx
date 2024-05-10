import { useState } from "react";
import { loginUser } from "../../services/users/UserServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/slices/AuthSlice";

const FormSignin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChangeInputSignIn(e: React.ChangeEvent<HTMLInputElement>) {
    e.currentTarget.id === "username"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  }

  async function handleFormSignInSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      const token = user.data.body.token;

      dispatch(setToken(token));
      if (user) {
        navigate("/user-home");
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
