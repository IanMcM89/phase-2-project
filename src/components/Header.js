import React from "react";
import UserDashBoard from "./UserDashboard";

function Header({ isLoggedIn, user }) {
  return (
    <header id="app-header">
      <div className="header-title">
        <img src="" alt=""/>
        <h1>MGBB</h1>
      </div>
      {isLoggedIn ? <UserDashBoard user={user} /> : null}
    </header>
  );
}

export default Header;