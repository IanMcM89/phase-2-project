import React from "react";
import PlantCard from "./PlantCard";
import { Redirect } from "react-router-dom";

function Favorites({ plants, isLoggedIn, currentUser, userFavorites, setUserFavorites}) {
    if (!isLoggedIn) return <Redirect to="/login" />;

    const favoritedPlants = plants.filter(plant => userFavorites.includes(plant.id));
    
    const plantsToBeDisplayed = favoritedPlants.map(plant => 
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

export default Favorites;