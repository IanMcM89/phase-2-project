import React from "react";
import PlantCard from "./PlantCard";
import { Redirect } from "react-router-dom";

function PlantsPage({ plants, isLoggedIn, setIsLoggedIn, currentUser, userFavorites, setUserFavorites}) {
  if (!isLoggedIn) return <Redirect to="/login" />;

  window.addEventListener('popstate', () => {
    setIsLoggedIn(false);
  });

  const plantsToBeDisplayed = plants.map(plant => 
    <PlantCard 
      key={plant.id} 
      plant={plant} 
      currentUser={currentUser} 
      userFavorites={userFavorites} 
      setUserFavorites={setUserFavorites}
    />
  );

  return (
    <main id="app-main">
      <div className="plant-card-table">
          {plantsToBeDisplayed}
      </div>
    </main>
  );
}

export default PlantsPage;