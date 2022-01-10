import React from "react";
import PlantCard from "./PlantCard";
import "../css/plants.css";

function PlantsPage({ plants, onDelete }) {
  //Returns PlantCard component for each plant in fetched plants data:
  const plantsToBeDisplayed = plants.map(plant => <PlantCard key={plant.id} plant={plant} onDelete={onDelete}/>);

  return (
    <main id="app-main">
      <div id="plant-card-table">
          {plantsToBeDisplayed}
      </div>
    </main>
  );
}

export default PlantsPage;