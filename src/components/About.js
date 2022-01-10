import React from "react";
import { withRouter } from 'react-router-dom';
import "../css/about.css";

function About() {
  return (
    <main id="app-main">
      <div id="about-container">
        <h1>ABOUT</h1>
        <h2>My Gardener's Black Book</h2>
        <p>Welcome to My Gardener's Black Book! MGBB is a collection of data on various plants meant to act as a quick reference guide or "black book" for anyone interested in plant care looking for a basic understanding of a particular plant's care requirements.</p>
        <p>You can search through the database to find information on a plant you are interested in. If a plant isn't available, use the post form to add it to our database! We're always looking for more plants and your submission could help others find what they are looking for down the road.</p>
        <p>If you see a plant that you like, feel free to click the like button on the plant's information card to show your appreciation and most importantly, have fun! Happy planting!</p>
      </div>
    </main>
  );
}

export default withRouter(About);