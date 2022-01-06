import React, { useState } from "react";
import { withRouter, useHistory } from 'react-router-dom';
import "../css/login.css";

function Login({ onLogin }) {
  const [loginError, setLoginError] = useState('');
  const [formData, setFormData] = useState({ username: '', password: '' });

  const history = useHistory();

  //Controls login form text inputs:
  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  //Fetches user data from server and sets current user to logged in if credentials exist and match and returns an error if not:
  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(userData => {
      const currentUser = userData.find(user => Object.values(formData).includes(user.username && user.password));

      return currentUser ? onLogin(currentUser) & history.push("/") : setLoginError('Login failed. Incorrect username or password.');
    })
  }

  return (
    <main id="app-main">
      <section id="login-container">
        <form id="login-form" onSubmit={handleSubmit}>
          <h1>USER LOGIN</h1>
          <p id="login-message">Welcome to My Gardener's Black Book</p>
          <p id="login-registration-message">New user?&nbsp;<a href="/registration">Create an account</a></p>
          <div id="login-inputs-container">
            <input className="login-input"
              type="text" 
              name="username" 
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input className="login-input"
              type="password"
              name="password" 
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <p id="login-error">{loginError}</p>
          <input id="login-submit" type="submit" value="Sign In"/>
        </form>
      </section>
    </main>
  );
}

export default withRouter(Login);