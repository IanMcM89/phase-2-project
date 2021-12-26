import React, {useState} from "react";
import { withRouter } from 'react-router-dom';

function UserLoginPage({ history, onUserLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();

    setFormData({
      username: '',
      password: ''
    });

    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(userData => userData.filter(user => {
      if (user.username.includes(formData.username) && user.password.includes(formData.password)) {
        return onUserLogin() & history.push("/");
      } else {
        return setLoginError('Login failed! Incorrect username or password.');
      }
    }))
  }

  return (
    <main id="App-login-main">
      <form id="App-login-form" onSubmit={handleSubmit}>
        <h1>User Login</h1>
        <p className="login-message">New user?&nbsp;<a href="/create-account">Create an account</a></p>
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
        <input id="login-submit" type="submit" value="Submit"/>
      </form>
    </main>
  );
}

export default withRouter(UserLoginPage);