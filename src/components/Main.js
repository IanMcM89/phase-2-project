import React from "react";
import CreateAccountPage from "./CreateAccountPage";
import LoginPage from "./LoginPage";
import PlantsPage from "./PlantsPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Main({ onLogin, history, plants, isLoggedIn, setIsLoggedIn}) {
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
            <PlantsPage plants={plants} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;