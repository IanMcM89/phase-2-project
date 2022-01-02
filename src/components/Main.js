import React from "react";
import CreateAccountPage from "./CreateAccountPage";
import LoginPage from "./LoginPage";
import PlantsPage from "./PlantsPage";
import FavoritesPage from "./FavoritesPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Main({ onLogin, plants, isLoggedIn, setIsLoggedIn, currentUser, users, setUsers, userFavorites, setUserFavorites }) {
  return (
    <main className="app-main">
      <BrowserRouter>
        <Switch>
        <Route exact path="/login">
            <LoginPage 
              onLogin={onLogin} 
              users={users} 
              setUsers={setUsers}
            />
          </Route>
          <Route exact path="/create-account">
            <CreateAccountPage 
              onLogin={onLogin} 
              users={users} 
              setUsers={setUsers}
            />
          </Route>
          <Route exact path="/favorites">
            <FavoritesPage 
              plants={plants}
              isLoggedIn={isLoggedIn} 
              currentUser={currentUser}
              userFavorites={userFavorites}
              setUserFavorites={setUserFavorites}
            />
          </Route>
          <Route exact path="/">
            <PlantsPage 
              plants={plants} 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn}
              currentUser={currentUser}
              userFavorites={userFavorites}
              setUserFavorites={setUserFavorites}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;