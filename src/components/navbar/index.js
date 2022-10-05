/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../avatar/index";

import logoutIcon from "../../assets/icons/logoutIcon.svg";
import style from "./navbar.module.scss";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={style.navDiv}>
      <div className={style.userInfoDiv}>
        <Avatar initials={"faizan ali"} />
        <h2>Faizan ali</h2>
      </div>
      <h1>Contact List Web App</h1>
      <img
        src={logoutIcon}
        height={36}
        width={36}
        onClick={() => navigate("/authPage")}
      />
    </div>
  );
}

export default Navbar;
