import React, {useState} from "react";
import { useHistory } from 'react-router-dom';

function UserDashBoard({currentUser, onLogout }) {
    const [isActive, setIsActive] = useState([true]);
    const history = useHistory();
    const activeStatus = [];

    function handleClick(e) {
        setIsActive({...activeStatus, [e.target.id]: true});

        if (e.target.textContent === 'DATABASE') {
            return history.push("/");
        } else if (e.target.textContent === 'FAVORITES') {
            return history.push("/favorites");
        } else if (e.target.textContent === 'POST') {
            return history.push("/");
        } else {
            return onLogout();
        }         
    }

    return (
        <div id="header-dashboard">
            <h2>Welcome {currentUser.username}!</h2>
            <button id={0} onClick={handleClick} className={ isActive[0] ? 'active' : null }>DATABASE</button>
            <button id={1} onClick={handleClick} className={ isActive[1] ? 'active' : null }>FAVORITES</button>
            <button id={2} onClick={handleClick} className={ isActive[2] ? 'active' : null }>POST</button>
            <button id={3} onClick={handleClick} className={ isActive[3] ? 'active' : null }>LOGOUT</button>
        </div>
    );
}

export default UserDashBoard;