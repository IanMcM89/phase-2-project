import React, { useEffect, useState } from "react";
import Header from "./Header";
import LoginPage from "./LoginPage";
import CreateAccountPage from "./CreateAccountPage";
import PlantsPage from "./PlantsPage";
import FavoritesPage from "./FavoritesPage";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
    .then(r => r.json())
    .then(plantData => {
      setPlants(plantData);
      setFilteredPlants(plantData);
    })
  }, [setIsLoggedIn]);

  useEffect(() => {
    if (currentUser.id !== undefined) return (
      fetch(`http://localhost:3000/users/${currentUser.id}`)
      .then(r => r.json())
      .then(userData => setUserFavorites(userData.favorites))
    );
  }, [currentUser.id, setUserFavorites, setIsLoggedIn]);

  function handleLogin(user) {
    setIsLoggedIn(!isLoggedIn);
    setUserFavorites(user.favorites);
    return setCurrentUser(user);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function handleResetPlants() {
    // setFilteredPlants(plants);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Header
          isLoggedIn={isLoggedIn}  
          onLogout={handleLogout} 
          onDatabaseClick={handleResetPlants}
          currentUser={currentUser}
        />
        <div className="app-main">
          <Switch>
              <Route exact path="/login">
                <LoginPage 
                  onLogin={handleLogin} 
                />
              </Route>
              <Route exact path="/create-account">
                <CreateAccountPage 
                  onLogin={handleLogin} 
                />
              </Route>
              <Route exact path="/favorites">
                <FavoritesPage 
                  plants={filteredPlants}
                  isLoggedIn={isLoggedIn} 
                  currentUser={currentUser}
                  userFavorites={userFavorites}
                  setUserFavorites={setUserFavorites}
                />
              </Route>
              <Route exact path="/">
                <PlantsPage 
                  plants={filteredPlants} 
                  isLoggedIn={isLoggedIn} 
                  setIsLoggedIn={setIsLoggedIn}
                  currentUser={currentUser}
                  userFavorites={userFavorites}
                  setUserFavorites={setUserFavorites}
                />
              </Route>
            </Switch>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;