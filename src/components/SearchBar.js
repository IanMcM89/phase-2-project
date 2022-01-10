import React, {useState} from "react";
import "../css/footer.css";

function SearchBar({ plants, setFilteredPlants }) {
    const [search, setSearch] = useState('');

    //Controls search input field and changes filtered plants state based on search input provided:
    function onChange(e) {
        setSearch(e.target.value);

        if (e.target.value === '') {
            return setFilteredPlants(plants);
        } else {
            return setFilteredPlants(plants.filter(plant => plant.name.toLowerCase().startsWith(e.target.value)));
        }
    }

    return (
        <div id="Search">
            <input type="text" name="search" placeholder="Search" value={search} onChange={onChange} />
        </div>
    );
}

export default SearchBar;