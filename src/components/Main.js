import React from "react";
import CreateAccountPage from "./CreateAccountPage";
import LoginPage from "./LoginPage";
import VegetablePage from "./VegetablePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Main({ onLogin, history, vegetables, isLoggedIn, setIsLoggedIn}) {
  return (
    <main className="app-main">
      <BrowserRouter>
        <Switch>
          <Route path="/create-account">
            <CreateAccountPage onLogin={onLogin} history={history}/>
          </Route>
          <Route path="/login">
            <LoginPage onLogin={onLogin} history={history} />
          </Route>
          <Route exact path="/">
            <VegetablePage vegetables={vegetables} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;