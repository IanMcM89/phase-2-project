import React from "react";
import SearchBar from "./SearchBar";
import "../css/footer.css";

function Footer({ plants, setFilteredPlants }) {
  return (
    <footer id="app-footer">
      <div id="search-container">
        <SearchBar plants={plants} setFilteredPlants={setFilteredPlants}/>
      </div>
      <div id="github-link">
        <a href="https://github.com/IanMcM89/phase-2-project">Created By IanMcM89</a>
        <img src="./images/icons/icon-github.png" alt="GitHub Logo"/>
      </div>
    </footer>
  );
}

export default Footer;