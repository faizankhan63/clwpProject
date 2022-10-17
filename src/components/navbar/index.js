/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logoutIcon from "../../assets/icons/logoutIcon.svg";
import style from "./navbar.module.scss";

function Navbar({ user }) {
  const navigate = useNavigate();
  console.log(user, "nav user");
  return (
    <div className={style.navDiv}>
      <div className={style.userInfoDiv}>
        <div className={style.userLogo}>
          <FaUser />
        </div>
        <h2>{user?.userName}</h2>
        <h3>{`(${user?.userType})`}</h3>
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
