import React from "react";
import Dashboard from "./Dashboard";
import "../css/header.css";

function Header() {

  return (
    <header id="app-header">
      <div id="header-title">
        <img src="./images/icons/mgbb-logo.png" alt="MGBB Logo"/>
        <h1>MGBB</h1>
      </div>
      <Dashboard/>
    </header>
  );
}

export default Header;