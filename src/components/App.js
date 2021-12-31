import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useHistory, Redirect } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([])
  const [user, setUser] = useState('')
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/plants")
    .then(r => r.json())
    .then(plantData => {
      setPlants(plantData);
      setFilteredPlants(plantData);
    })
  }, []);

  function onLogin(user) {
    setIsLoggedIn(!isLoggedIn);
    return setUser(user);
  }

  function onLogout() {
    setIsLoggedIn(false)
    return <Redirect to="/login" />
  }

  function onDatabaseClick() {
    setFilteredPlants(plants);
  }

  function onFavoritesClick() {
    setFilteredPlants(plants.filter(plant => plant.favorites.find(username => username === user)));
  }

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} user={user} onLogout={onLogout} onDatabaseClick={onDatabaseClick} onFavoritesClick={onFavoritesClick}/>
      <Main onLogin={onLogin} plants={filteredPlants} history={history} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Footer />
    </div>
  );
}

export default App;