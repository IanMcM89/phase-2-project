import React from "react";
import PlantCard from "./PlantCard";
import { Redirect } from "react-router-dom";

function Favorites(props) {
    //Redirects user back to login page if user's login state is set to false:
    if (!props.isLoggedIn) return <Redirect to="/login" />;

    //Filters through plants data and returns plant if plant id is in user's favorites array:
    const favoritedPlants = props.plants.filter(plant => props.userFavorites.includes(plant.id));
    
    //Returns a PlantCard component for each favorited plant:
    const plantsToBeDisplayed = favoritedPlants.map(plant => 
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

export default Favorites;