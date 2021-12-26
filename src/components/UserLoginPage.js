import React from "react";

function UserLoginPage() {
    return (
      <main id="App-login-main">
        <form id="App-login-form">
          <h1>User Login</h1>
          <p>New user?&nbsp;<a href="./create-account">Create an account</a></p>
          <div id="login-inputs-container">
            <div className="login-input">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="login-input">
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <input id="login-submit" type="submit" value="Submit" />
        </form>
      </main>
    );
}

export default UserLoginPage;