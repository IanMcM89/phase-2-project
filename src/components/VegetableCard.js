import React from "react";

function VegetableCard({ veggie }) {
    return (
        <div className="vegetable-card">
          <p>{veggie.name}</p>
        </div>
    );
}

export default VegetableCard;