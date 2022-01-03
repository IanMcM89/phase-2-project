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
        <p>Posted By: <span>{plant.poster}</span></p>
        <button className={isFavorited ? 'favorite-button-active' : 'favorite-button'} onClick={handleFavoriteClick}>⭐</button>
      </div>
      <div className="plant-card-content">
        <div className="plant-card-image">
          <img src={plant.image} alt={plant.name}/>
        </div>
        <div className="plant-card-info">
          <p>Sunlight Level: <span>{plant.sunlight}</span></p>
          <p>Water Level: <span>{plant.water}</span></p>
          <p>Best Planting Season: <span>{plant.season}</span></p>
          <div>{plant.description}</div>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;