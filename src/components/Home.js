import React from "react";
import VegetablePage from "./VegetablePage";
import { Redirect } from "react-router-dom";

function Home({ isSignedIn }) {
    if (!isSignedIn) return <Redirect to="/login" />;
    
    return (
      <div>
        <VegetablePage />
      </div>
    );
}

export default Home;