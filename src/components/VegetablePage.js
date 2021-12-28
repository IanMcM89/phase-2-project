import React from "react";
import VegetableCard from "./VegetableCard";
import { Redirect } from "react-router-dom";

function VegetablePage({ isSignedIn, userVegetables }) {
  if (!isSignedIn) return <Redirect to="/login" />;

  const vegetablesToBeDisplayed = userVegetables.map(veggie => <VegetableCard key={veggie.id} veggie={veggie}/>);

  return (
    <main className="App-main">
      <div className="vegetable-card-table">
        {vegetablesToBeDisplayed}
      </div>
    </main>
  );
}

export default VegetablePage;