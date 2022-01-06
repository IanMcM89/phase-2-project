import React from "react";
import Dashboard from "./Dashboard";

function Header(props) {
  return (
    <header id="app-header">
      <div id="header-title">
        <img src="./images/icons/mgbb-logo.png" alt="MGBB Logo"/>
        <h1>MGBB</h1>
      </div>
      {/* The Dashboard component only displays when a user is logged in */}
      {props.isLoggedIn ? <Dashboard
        onLogout={props.onLogout} 
        isActive={props.isActive} 
        setIsActive={props.setIsActive} 
        currentUser={props.currentUser} 
      /> : null}
    </header>
  );
}

export default Header;