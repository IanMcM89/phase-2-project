import React, {useState} from "react";

function UserDashBoard({ user, onLogout, onDatabaseClick, onFavoritesClick }) {
    const [isActive, setIsActive] = useState([true]);
    const activeStatus = {
        1 : false,
        2 : false,
        3 : false,
        4 : false,
    };

    function handleClick(e) {
        setIsActive({...activeStatus, [e.target.id]: true});

        if (e.target.textContent === 'DATABASE') {
            return onDatabaseClick();
        } else if (e.target.textContent === 'FAVORITES') {
            return onFavoritesClick();
        } else if (e.target.textContent === 'POST') {
            console.log('Post');
        } else {
            return onLogout();
        }         
    }

    return (
        <div id="header-dashboard">
            <h2>Welcome {user}!</h2>
            <button id={0} onClick={handleClick} className={ isActive[0] ? 'active' : null }>DATABASE</button>
            <button id={1} onClick={handleClick} className={ isActive[1] ? 'active' : null }>FAVORITES</button>
            <button id={2} onClick={handleClick} className={ isActive[2] ? 'active' : null }>POST</button>
            <button id={3} onClick={handleClick} className={ isActive[3] ? 'active' : null }>LOGOUT</button>
        </div>
    );
}

export default UserDashBoard;