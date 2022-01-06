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

  //Fetches plant data from server and sets plants state to fetched plant data:
  useEffect(() => {
    fetch("http://localhost:3000/plants")
    .then(r => r.json())
    .then(plantData => {
      setPlants(plantData);
      setFilteredPlants(plantData);
    })
  }, [setIsLoggedIn]);

  //Fetches current user's data from server if current user is defined:
  useEffect(() => {
    if (currentUser.id !== undefined) return (
      fetch(`http://localhost:3000/users/${currentUser.id}`)
      .then(r => r.json())
      .then(userData => setUserFavorites(userData.favorites))
    );
  }, [currentUser.id, setUserFavorites, setIsLoggedIn]);

  //Sets current user data to currently logged in user and allows user access to the database"
  function handleLogin(user) {
    setIsLoggedIn(!isLoggedIn);
    setUserFavorites(user.favorites);
    setCurrentUser(user);
  }

  //Logs the current user out, resets Dashboard tabs to default and redirects to the login page:
  function handleLogout() {
    setIsLoggedIn(false);
    setIsActive({ 0: true });
  }

  //Adds new plant to server and resets Dashboard tabs to default:
  function handleFormSubmit(newPlant) {
    setFilteredPlants([...plants, newPlant]);
    setIsActive({ 0: true });
  }

  return (
    <div id="app">
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
              <Registration />
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