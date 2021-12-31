import React from "react";

function PlantCard({ plant }) {
  return (
      <div className="plant-card">
        <div className="plant-card-title">
          <h3>{plant.name}</h3>
          <p>Posted By: {plant.poster}</p>
          <button className="plant-card-favorite-button" onClick={console.log('click')}>⭐</button>
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