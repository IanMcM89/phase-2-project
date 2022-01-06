import React, { useState } from "react";
import { withRouter, useHistory } from 'react-router-dom';
import "../css/login.css";

function Registration() {
  const [signUpError, setSignUpError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    verifiedPassword: ''
  });

  const history = useHistory();

  //Controls registration form text inputs:
  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  //Creates a new user object with form data and validates the user information before posting:
  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      id: '',
      username: formData.username,
      password: formData.password,
      favorites: []
    }
    
    validateUser(newUser);
  }

  //Throws error if inputs are empty, passwords do not match or if server already contains user. If not, posts user and redirects to /login: 
  function validateUser(newUser) {
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(userData => {
      if (newUser.username === '' || newUser.password === '') {
        return setSignUpError('Please enter a valid username and password');
      } else if (formData.verifiedPassword !== formData.password) {
        return setSignUpError('Passwords must match');
      } else if (userData.find(user => user.username === newUser.username)) {
        return setSignUpError('User already exists');
      } else {
        return postUser(newUser) & history.push("/login");
      };
    })
  }

  //Sends post request to server with new user data:
  function postUser(newUser) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser), 
    })
    .then(r => r.json())
    .then(newUser => console.log(newUser))
  }

  return (
    <main id="app-main">
      <section id="login-container">
        <form id="login-form" onSubmit={handleSubmit}>
          <h1>Create New Account</h1>
          <p id="login-message">Enter a username and password:</p>
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
            <input className="login-input"
              type="password" 
              name="verifiedPassword" 
              placeholder="Verify Password"
              value={formData.verifiedPassword}
              onChange={handleChange} 
            />
          </div>
          <p id="login-error">{signUpError}</p>
          <input id="login-submit" type="submit" value="Register" />
        </form>
      </section>
    </main>
  )
}

export default withRouter(Registration);