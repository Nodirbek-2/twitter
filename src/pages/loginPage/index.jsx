import "./index.css";
import "../../assets/fonts/roboto.css";
import { useContext, useState } from "react";
import axios from "axios";
import { ContextAuth } from "../../context/authContext";
import { Icons } from "../../constants/icons";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { authFunc } = useContext(ContextAuth);

  async function onFinish() {
    const res = await axios.post("https://dummyjson.com/auth/login", {
      username: login,
      password: password,
    });
    if (res.status === 200) {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      authFunc(res.data.accessToken, res.data.refreshToken);

      window.location.reload();
    }

    console.log(res);
  }
  function signUp() {}

  function forgotPass() {
    let a = prompt("parolingizni untuttingizmi");
    console.log(a);
  }
  return (
    <>
      <div className="login__page">
        <div className="page">
          <div className="info">
            <Icons.twitterLogo />
            <h1>Log in to Twitter</h1>
          </div>
          <div className="form">
            <div className="login__input">
              <input
                type="text"
                placeholder="Phone number, email address"
                onInput={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="password__input">
              <input
                type="password"
                placeholder="Password"
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login__btn" onClick={onFinish}>
              Log In
            </button>
          </div>
          <div className="foget__pass">
            <p onClick={forgotPass}>Forgot password?</p>
            <p onClick={signUp}>Sign up to Twitter</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
