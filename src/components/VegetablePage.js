import React from "react";
import VegetableCardTable from "./VegetableCardTable";
import { Redirect } from "react-router-dom";

function VegetablePage({ isSignedIn }) {
  if (!isSignedIn) return <Redirect to="/login" />;

  return (
    <main className="App-main">
      <VegetableCardTable />
    </main>
  );
}

export default VegetablePage;