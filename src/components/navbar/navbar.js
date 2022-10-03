import React from "react";
import { Link } from "react-router-dom";

import style from "./navbar.module.scss";

function Navbar() {
  return (
    <div className={style.navDiv}>
      <h3>add logo here...</h3>
      <h1>Demo Navbar</h1>
      <Link className="link" to={"/authPage"}>
        Logout
      </Link>
    </div>
  );
}

export default Navbar;
