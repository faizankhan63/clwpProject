import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import style from "./auth.module.scss";

function AuthPage() {
  const [signup, setSignup] = useState(true);

  return (
    <div>
      <div className={style.authFormContainer}>
        <form className={style.authForm}>
          <div className={style.authFormContent}>
            <div className={style.choiceDiv}>
              <span onClick={() => setSignup(true)}>SignUp</span>
              <span onClick={() => setSignup(false)}>SignIn</span>
            </div>
            {signup ? (
              <>
                <h3 className={style.authFormTitle}>Sign Up</h3>
                <div className={style.inputDiv}>
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className={style.inputDiv}>
                  <input type="email" placeholder="Enter email" />
                </div>
                <div className={style.inputDiv}>
                  <input type="password" placeholder="Enter password" />
                </div>
              </>
            ) : (
              <>
                <h3 className={style.authFormTitle}>Sign In</h3>
                <div className={style.inputDiv}>
                  <input type="email" placeholder="Enter email" />
                </div>
                <div className={style.inputDiv}>
                  <input type="password" placeholder="Enter password" />
                </div>
              </>
            )}

            <div className={style.btnDiv}>
              <Link to={"/"}>Login Dummy</Link>
            </div>
            <div className={style.socialDiv}>
              <FacebookLoginButton />
              <GoogleLoginButton />
              <GithubLoginButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
