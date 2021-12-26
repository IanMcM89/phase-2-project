import React from "react";
import Header from "./Header";
import VegetablePage from "./VegetablePage";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div>
      <VegetablePage />
    </div>
  );
}

function Login() {
  return (
    <main id="App-login-main">
      <form id="App-login-form">
        <h1>User Login</h1>
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

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;