import React from "react";
import UserDashBoard from "./UserDashboard";

function Header({ isLoggedIn, user, onLogout, onDatabaseClick, onFavoritesClick }) {
  return (
    <header id="app-header">
      <div className="header-title">
        <img src="./images/mgbb-logo.png" alt="MGBB Logo"/>
        <h1>MGBB</h1>
      </div>
      {isLoggedIn ? <UserDashBoard user={user} onLogout={onLogout} onDatabaseClick={onDatabaseClick} onFavoritesClick={onFavoritesClick}/> : null}
    </header>
  );
}

export default Header;