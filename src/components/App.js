import React, { useEffect, useState } from "react";
import Header from "./Header";
import Login from "./Login";
import Registration from "./Registration";
import PlantsPage from "./PlantsPage";
import Favorites from "./Favorites";
import PlantForm from "./PlantForm";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [userFavorites, setUserFavorites] = useState([]);
  const [isActive, setIsActive] = useState([true]);

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
    setCurrentUser(user);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  //Adds new plant to plant data and resets Dashboard tab to 'Database':
  function handleFormSubmit(newPlant) {
    setFilteredPlants([...plants, newPlant]);
    
    return setIsActive({ 0: true });
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Header 
          isLoggedIn={isLoggedIn} 
          onLogout={handleLogout} 
          currentUser={currentUser} 
          isActive={isActive} 
          setIsActive={setIsActive}
        />
          <Switch>
            <Route exact path="/login">
              <Login onLogin={handleLogin} />
            </Route>
            <Route exact path="/registration">
              <Registration onLogin={handleLogin} />
            </Route>
            <Route exact path="/favorites">
              <Favorites 
                plants={filteredPlants}
                isLoggedIn={isLoggedIn} 
                currentUser={currentUser}
                userFavorites={userFavorites}
                setUserFavorites={setUserFavorites}
              />
            </Route>
            <Route exact path="/post">
              <PlantForm 
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                onSubmit={handleFormSubmit}
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;