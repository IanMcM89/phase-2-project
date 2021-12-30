import React from "react";

function UserDashBoard({ user }) {
  return (
    <div id="header-dashboard">
        <h2>Welcome {user}!</h2>
        <button>DATABASE</button>
        <button>FAVORITES</button>
        <button>POST</button>
        <button>LOGOUT</button>
    </div>
  );
}

export default UserDashBoard;