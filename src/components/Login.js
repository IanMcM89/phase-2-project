import React from "react";

function Login() {
    return (
      <main id="App-login-main">
        <form id="App-login-form">
          <h1>User Login</h1>
          <p>New user? Create an account</p>
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

export default Login;