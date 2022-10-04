import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import style from "./auth.module.scss";

function AuthPage() {
  const github = () => {
    window.open("http://localhost:3001/auth/github", "_self");
  };

  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  return (
    <div>
      <div className={style.authFormContainer}>
        <form className={style.authForm}>
          <div className={style.authFormContent}>
            <div className={style.socialDiv}>
              <FacebookLoginButton />
              <GoogleLoginButton onClick={google} />
              <GithubLoginButton onClick={github} />
            </div>
            <div className={style.btnDiv}>
              <Link to={"/"}>Login Dummy</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
