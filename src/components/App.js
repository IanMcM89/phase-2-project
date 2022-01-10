import React, { useEffect, useState } from "react";
import Header from "./Header";
import About from "./About";
import PlantsPage from "./PlantsPage";
import PlantForm from "./PlantForm";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  //Fetches plant data from server and sets plants state to fetched plant data:
  useEffect(() => {
    fetch("http://localhost:3000/plants")
    .then(r => r.json())
    .then(plantData => {
      setPlants(plantData);
      setFilteredPlants(plantData);
    })
  },[]);

  //Adds new plant to server:
  function handleFormSubmit(newPlant) {
    setPlants([...plants, newPlant]);
    setFilteredPlants([...plants, newPlant]);
  }

  //Filters through plants array and removes the deleted plant card from the table:
  function handleDelete(deletedPlantId) {
    setPlants(plants.filter(plant => plant.id !== deletedPlantId));
    setFilteredPlants(plants.filter(plant => plant.id !== deletedPlantId));
  }

  return (
    <div id="app">
      <Header/>
      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/post">
          <PlantForm onSubmit={handleFormSubmit} />
        </Route>
        <Route exact path="/">
          <PlantsPage plants={filteredPlants} onDelete={handleDelete} />
        </Route>
      </Switch>
      <Footer plants={plants} setFilteredPlants={setFilteredPlants} />
    </div>
  );
}

export default App;