import React from "react";
import { useHistory } from 'react-router-dom';

function Dashboard(props) {
    const history = useHistory();

    //Sets the currently clicked dashboard tab to 'active' class and redirects route path based on case provided by tab text content:
    function handleClick(e) {
        props.setIsActive({[e.target.id]: true});

        switch (e.target.textContent) {
            case 'DATABASE':
                history.push("/");
                break;
            case 'FAVORITES':
                history.push("/favorites");
                break;
            case 'POST':
                history.push("/post")
                break;
            default:
                props.onLogout();
        }       
    }

    return (
        <div id="dashboard">
            <h2>Welcome {props.currentUser.username}!</h2>
            <button id={0} onClick={handleClick} className={ props.isActive[0] ? 'active' : null }>DATABASE</button>
            <button id={1} onClick={handleClick} className={ props.isActive[1] ? 'active' : null }>FAVORITES</button>
            <button id={2} onClick={handleClick} className={ props.isActive[2] ? 'active' : null }>POST</button>
            <button id={3} onClick={handleClick} className={ props.isActive[3] ? 'active' : null }>LOGOUT</button>
        </div>
    );
}

export default Dashboard;