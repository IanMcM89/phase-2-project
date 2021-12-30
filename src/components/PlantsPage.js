import React from "react";
import PlantCard from "./PlantCard";
import { Redirect } from "react-router-dom";

function PlantsPage({ plants, isLoggedIn, setIsLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;

  window.addEventListener('popstate', (e) => {
    setIsLoggedIn(false)
  })

  const plantsToBeDisplayed = plants.map(plant => <PlantCard key={plant.id} plant={plant}/>);

  return (
    <div className="plant-card-table">
        {plantsToBeDisplayed}
    </div>
  );
}

export default PlantsPage;