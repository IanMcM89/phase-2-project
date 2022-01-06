import React from "react";
import PlantCard from "./PlantCard";
import { Redirect } from "react-router-dom";

function PlantsPage(props) {
  //Redirects user back to login page if user's login state is set to false:
  if (!props.isLoggedIn) return <Redirect to="/login" />;

  //Prevents unauthorized return to user's portal by logging user out if browser back button is clicked:
  window.addEventListener('popstate', () => {
    props.setIsLoggedIn(false);
  });

  //Returns PlantCard component for each plant in fetched plants data:
  const plantsToBeDisplayed = props.plants.map(plant => 
    <PlantCard 
      key={plant.id} 
      plant={plant} 
      currentUser={props.currentUser} 
      userFavorites={props.userFavorites} 
      setUserFavorites={props.setUserFavorites}
    />
  );

  return (
    <main id="app-main">
      <div id="plant-card-table">
          {plantsToBeDisplayed}
      </div>
    </main>
  );
}

export default PlantsPage;