import React from "react";

function VegetableCard({ veggie }) {
    return (
        <div className="vegetable-card">
          <div className="card-title">
            <h3>{veggie.name}</h3>
            <p>Posted By: {veggie.poster}</p>
            <button>⭐</button>
          </div>
          <div className="card-content">
            <img></img>
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

export default VegetableCard;