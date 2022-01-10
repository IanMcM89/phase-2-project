import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/plantForm.css";

function PlantForm({ onSubmit }) {
    const [activeSeasons, setActiveSeasons] = useState([]);
    const [formError, setFormError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        sunlight: '',
        water: '',
        season: '',
        description: '',
        likes: 0
    });

    const history = useHistory();

    //Controls form input fields:
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    //Handles sunlight and water icon bars in post form and sets form data to currently selected icon level:
    function handleIconChange(e) {
        let iconArray = [...e.target.parentElement.children];

        iconArray.forEach(icon => {
            let index = iconArray.indexOf(e.target);
    
            if (icon.className === 'icon') {
                iconArray.filter(icon => iconArray.indexOf(icon) <= index).forEach(icon => icon.className = 'icon-active');
            } else {
                iconArray.filter(icon => iconArray.indexOf(icon) > index).forEach(icon => icon.className = 'icon');
            }
        })

        const iconLevel = iconArray.filter(icon => icon.className.includes('active')).map(icon => icon = icon.textContent).join('');

        return setFormData({...formData, [e.target.parentElement.getAttribute('name')]: iconLevel});
    }

    //Handles seasons icon bar in post form and sets form data to currently selected season icons:
    function handleSeasonChange(e) {
        let seasonsArray = activeSeasons;

        //Adds/removes selected season icon to/from form data:
        if (activeSeasons.includes(e.target.textContent)) {
            seasonsArray = [...activeSeasons.filter(icon => icon !== e.target.textContent)];
            setActiveSeasons(seasonsArray);
        } else {
            seasonsArray = [ ...activeSeasons, e.target.textContent ];
            setActiveSeasons(seasonsArray);
        }

        return setFormData({...formData, season: seasonsArray.join('')});
    }

    //Posts new plant to server and redirects to PlantsPage if all form inputs are filled and throws error if not:
    function handleSubmit(e) {
        e.preventDefault();

        if (Object.values(formData).includes('')) {
            return setFormError('All input fields must be filled before posting');
        } else {
            return postPlant() & history.push("/");
        }
    }

    //Sends post request to server with new plant data and calls handleFormSubmit function in App.js:
    function postPlant() {
        fetch('http://localhost:3000/plants', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            })
            .then(r => r.json())
            .then(newPlant => onSubmit(newPlant));
    }

    return (
        <main id="app-main">
            <form id="app-post-form" onSubmit={handleSubmit}>
                <h1>POST FORM</h1>
                <p className="post-form-message">Post a new plant to the MGBB database by filling out the form below:</p>
                <section id="post-inputs-container">
                    <div id="text-input-div">
                        <label htmlFor="name">Plant Name</label>
                        <input className="post-input"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="image">Plant Image</label>
                        <input className="post-input"
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            value={formData.image}
                            onChange={handleChange}
                        />
                        <label htmlFor="description">Description</label>
                        <textarea className="post-textarea"
                            id=""
                            name="description"
                            placeholder="Description"
                            maxLength="230"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div id="icon-input-div">
                        <label htmlFor="sunlight">Sunlight Selector</label>
                        <div className='icon-input' name="sunlight">
                            <i className="icon" onClick={handleIconChange}>☀️</i>
                            <i className="icon" onClick={handleIconChange}>☀️</i>
                            <i className="icon" onClick={handleIconChange}>☀️</i>
                            <i className="icon" onClick={handleIconChange}>☀️</i>
                            <i className="icon" onClick={handleIconChange}>☀️</i>
                        </div>
                        <label htmlFor="water">Water Selector</label>
                        <div className='icon-input' name="water">
                            <i className="icon" onClick={handleIconChange}>💧</i>
                            <i className="icon" onClick={handleIconChange}>💧</i>
                            <i className="icon" onClick={handleIconChange}>💧</i>
                            <i className="icon" onClick={handleIconChange}>💧</i>
                            <i className="icon" onClick={handleIconChange}>💧</i>
                        </div>
                        <label htmlFor="season">Season Selector</label>
                        <div className='season-input' name="season">
                            <i className={activeSeasons.includes('🌱') ? 'icon-active' : 'icon'} onClick={handleSeasonChange}>🌱</i>
                            <i className={activeSeasons.includes('🏝️') ? 'icon-active' : 'icon'} onClick={handleSeasonChange}>🏝️</i>
                            <i className={activeSeasons.includes('🍂') ? 'icon-active' : 'icon'} onClick={handleSeasonChange}>🍂</i>
                            <i className={activeSeasons.includes('❄️') ? 'icon-active' : 'icon'} onClick={handleSeasonChange}>❄️</i>
                        </div>
                        <p className="form-error">{formError}</p>
                        <input id="post-submit" type="submit" value="POST"/>
                    </div>
                </section>
            </form>
        </main>
    );
}

export default PlantForm;