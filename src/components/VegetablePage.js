import React from "react";
import VegetableCard from "./VegetableCard";
import { Redirect } from "react-router-dom";

function VegetablePage({ isSignedIn, vegetables, setIsSignedIn }) {
  if (!isSignedIn) return <Redirect to="/login" />;

  window.addEventListener('popstate', (e) => {
    setIsSignedIn(false)
  })

  const vegetablesToBeDisplayed = vegetables.map(veggie => <VegetableCard key={veggie.id} veggie={veggie}/>);

  return (
    <main id="App-main">
      <div className="vegetable-card-table">
        {vegetablesToBeDisplayed}
      </div>
    </main>
  );
}

export default VegetablePage;