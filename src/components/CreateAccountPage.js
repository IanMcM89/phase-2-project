import React, {useState} from "react";
import { withRouter } from 'react-router-dom';

function CreateAccountPage({ onLogin, history }) {
  const [signUpError, setSignUpError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    verifiedPassword: ''
  });

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      id: '',
      username: formData.username,
      password: formData.password
    }

    fetch("http://localhost:3000/users")
      .then(r => r.json())
      .then(userData => {
        if (newUser.username === '' || newUser.password === '') {
          return setSignUpError('Please enter a valid username and password.');
        } else if (formData.verifiedPassword !== formData.password) {
          return setSignUpError('Registration failed. Passwords must match.');
        } else if (userData.find(user => user.username === newUser.username)) {
          return setSignUpError('Registration failed. User already exists.');
        } else {
          // fetch("http://localhost:3000/users", {
          // method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // body: JSON.stringify(newUser), 
          // })
          // .then(r => r.json())
          // .then(newUser => console.log(newUser))
          // .then(onUserLogin(newUser.username) & history.push("/"))

          return onLogin(newUser.username) & history.push("/");
        }
      })

    setFormData({
      username: '',
      password: '',
      verifiedPassword: ''
    });
  }

  return (
    <div id="app-login-div">
      <form id="app-login-form" onSubmit={handleSubmit}>
        <h1>Create New Account</h1>
        <p className="login-message">Enter a username and password:</p>
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
          <div className="login-input">
            <input 
              type="password" 
              name="verifiedPassword" 
              placeholder="Verify Password"
              value={formData.verifiedPassword}
              onChange={handleChange} 
            />
          </div>
        </div>
        <p className="login-error">{signUpError}</p>
        <input id="login-submit" type="submit" value="Register" />
      </form>
    </div>
  )
}

export default withRouter(CreateAccountPage);