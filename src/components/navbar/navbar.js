import React from "react";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "4px solid red",
        marginBottom: 15,
      }}
    >
      <h3>add logo here...</h3>
      <h1>Demo Navbar</h1>
      <button>Logout Button</button>
    </div>
  );
}

export default Navbar;
