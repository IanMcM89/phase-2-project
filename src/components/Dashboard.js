import React from "react";
import { useHistory } from 'react-router-dom';
import "../css/header.css";

function Dashboard() {
    const history = useHistory();

    //Redirects route path based on case provided by tab text content:
    function handleClick(e) {
        switch (e.target.textContent) {
            case 'ABOUT':
                history.push("/about")
                break;
            case 'POST':
                history.push("/post")
                break;
            default:
                return history.push("/");
        }       
    }

    return (
        <div id="dashboard">
            <h3>My Gardener's Black Book</h3>
            <section>
                <button onClick={handleClick}>DATABASE</button>
                <button onClick={handleClick}>POST</button>
                <button onClick={handleClick}>ABOUT</button>
            </section>
        </div>
    );
}

export default Dashboard;