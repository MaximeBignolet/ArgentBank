import { useState } from "react";
import { loginUser } from "../../services/users/UserServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/slices/AuthSlice";
import { AxiosError } from "axios";

const FormSignin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeInputSignIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.id === "username"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  }

   const handleFormSignInSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      const token = user.data.body.token;

      dispatch(setToken(token));
      if (user) {
        navigate("/user-home");
      }
    } catch (e) {
      if(e instanceof AxiosError){
        setError(e.response?.data.message)
      }
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
     {error &&  <div className={`error_form_sign_in ${error ? 'show' : ''}`}>
        {error}
      </div>}
      <input type="submit" value="Sign In" className="sign-in-button" />
    </form>
  );
};

export default FormSignin;
