import React from "react";

function PlantCard({ plant }) {
    return (
        <div className="plant-card">
          <div className="card-title">
            <h3>{plant.name}</h3>
            <p>Posted By: {plant.poster}</p>
            <button>⭐</button>
          </div>
          <div className="card-content">
            <img alt={plant.name}/>
            <div>
              <p>Sunlight: </p>
              <p>Water: </p>
              <p>Season: </p>
              <p>Description:</p>
            </div>
          </div>
        </div>
    );
}

export default PlantCard;