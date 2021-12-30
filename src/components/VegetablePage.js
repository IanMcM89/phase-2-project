import React from "react";
import VegetableCard from "./VegetableCard";
import { Redirect } from "react-router-dom";

function VegetablePage({ vegetables, isLoggedIn, setIsLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;

  window.addEventListener('popstate', (e) => {
    setIsLoggedIn(false)
  })

  const vegetablesToBeDisplayed = vegetables.map(veggie => <VegetableCard key={veggie.id} veggie={veggie}/>);

  return (
    <div className="vegetable-card-table">
        {vegetablesToBeDisplayed}
    </div>
  );
}

export default VegetablePage;