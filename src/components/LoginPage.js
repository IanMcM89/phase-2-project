import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';

function LoginPage({ history, onLogin, users, setUsers }) {
  const [loginError, setLoginError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(userData => setUsers(userData))
  }, [setUsers]);

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function validateUser() {
    if (users.find(user => user.username === formData.username && user.password === formData.password)) {
      return onLogin(formData.username) & history.push("/");
    } else {
      return setLoginError('Incorrect username or password.');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    validateUser();

    setFormData({
      username: '',
      password: '',
    });
  }

  return (
    <div id="app-login-div">
      <form id="app-login-form" onSubmit={handleSubmit}>
        <h1>USER LOGIN</h1>
        <p className="login-message">Welcome to My Gardener's Black Book</p>
        <p className="login-new-user-message">New user?&nbsp;<a href="/create-account">Create an account</a></p>
        <div id="login-inputs-container">
          <div className="login-input">
            <input 
              type="text" 
              name="username" 
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="login-input">
            <input 
              type="password"
              name="password" 
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <p className="login-error">{loginError}</p>
        <input id="login-submit" type="submit" value="Sign In"/>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);