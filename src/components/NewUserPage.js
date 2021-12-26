import React from "react";

function NewUserPage() {
    return (
      <main id="App-login-main">
          <form id="App-login-form">
            <h1>Create New Account</h1>
            <p>Enter new username and password:</p>
            <div id="login-inputs-container">
              <div className="login-input">
                <input type="text" name="username" placeholder="New Username" />
              </div>
              <div className="login-input">
                <input type="password" name="password" placeholder="New Password" />
              </div>
              <div className="login-input">
                <input type="password" name="verify-password" placeholder="Verify Password" />
              </div>
            </div>
            <input id="login-submit" type="submit" value="Submit" />
          </form>
        </main>
    )
}

export default NewUserPage;