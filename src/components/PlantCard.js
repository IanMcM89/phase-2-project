import React, { useState } from "react";
import "../css/plants.css";

function PlantCard({ plant, onDelete }) {
  const [likes, setLikes] = useState(plant.likes);

  //Sends patch request to server with updated likes and changes likes state:
  function handleClick() {
    plant.likes++;

    fetch(`http://localhost:3000/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: plant.likes
      }),
    })
    .then(r => r.json())
    .then(patchedPlant => console.log(patchedPlant))

    return setLikes(plant.likes);
  }

  //Sends delete request to server for plant ID and calls onDelete callback to remove plant card div:
  function handleDeleteClick() {
    fetch(`http://localhost:3000/plants/${plant.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => onDelete(plant.id));
  }

  return (
    <div className="plant-card">
      <section className="plant-card-title">
        <h2>{plant.name}</h2>
        <div>
          <button className="like-button" onClick={handleClick}>{likes} 👍</button>
          <button className="delete-button" onClick={handleDeleteClick}>❌</button>
        </div>
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