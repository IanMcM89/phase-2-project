import React, {useState} from "react";

function PlantCard({ plant, currentUser, userFavorites, setUserFavorites }) {
  //Sets favorited state of plant card to true only if the user's favorites array includes the plant's id:
  const [isFavorited, setIsFavorited] = useState(userFavorites.find(id => id === plant.id));

  function handleFavoriteClick() {
    //Sets favorited state to opposite of current state:
    setIsFavorited(!isFavorited);

    //Adds plant id to user's favorites if favorite state is true and filters out the id if false: 
    const patch = !isFavorited ? [...userFavorites, plant.id] : userFavorites.filter(id => id !== plant.id);

    return patchPlant(patch);
  }

  //Sends patch request to server and updates current user's favorites array:
  function patchPlant(patch) {
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
      <section className="plant-card-title">
        <h3>{plant.name}</h3>
        <p>Posted By: <span>{plant.poster}</span></p>
        <button className={isFavorited ? 'favorite-button-active' : 'favorite-button'} onClick={handleFavoriteClick}>⭐</button>
      </section>
      <section className="plant-card-content">
        <div className="plant-card-image">
          <img src={plant.image} alt={plant.name}/>
        </div>
        <div className="plant-card-info">
          <p>Sunlight Level: <span>{plant.sunlight}</span></p>
          <p>Water Level: <span>{plant.water}</span></p>
          <p>Best Planting Season: <span>{plant.season}</span></p>
          <div>{plant.description}</div>
        </div>
      </section>
    </div>
  );
}

export default PlantCard;