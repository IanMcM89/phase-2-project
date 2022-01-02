import React, {useState} from "react";

function PlantCard({ plant, currentUser, userFavorites, setUserFavorites }) {
  const [isFavorited, setIsFavorited] = useState(userFavorites.find(id => id === plant.id));

  function handleFavoriteClick() {
    setIsFavorited(!isFavorited);

    const patch = !isFavorited ? [...userFavorites, plant.id] : userFavorites.filter(id => id !== plant.id);

    console.log(patch)

    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorites: patch
      }),
    })
      .then(r => r.json())
      .then(updatedUser => setUserFavorites(updatedUser.favorites));
  }

  return (
    <div className="plant-card">
      <div className="plant-card-title">
        <h3>{plant.name}</h3>
        <p>Posted By: {plant.poster}</p>
        <button className={isFavorited ? 'favorite-button-active' : 'favorite-button'} onClick={handleFavoriteClick}>⭐</button>
      </div>
      <div className="plant-card-content">
        <img alt={plant.name}/>
        <div>
          <p>Sunlight: {plant.sunlight}</p>
          <p>Water: {plant.water}</p>
          <p>Season: {plant.season}</p>
          <p>Description: {plant.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;