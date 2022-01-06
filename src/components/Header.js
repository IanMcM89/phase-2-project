import React from "react";
import UserDashBoard from "./UserDashboard";

function Header({ isLoggedIn, currentUser, onLogout, isActive, setIsActive }) {
  return (
    <header id="app-header">
      <div className="header-title">
        <img src="./images/icons/mgbb-logo.png" alt="MGBB Logo"/>
        <h1>MGBB</h1>
      </div>
      {isLoggedIn ? 
        <UserDashBoard 
          currentUser={currentUser} 
          onLogout={onLogout} 
          isActive={isActive} 
          setIsActive={setIsActive}
        /> : null}
    </header>
  );
}

export default Header;