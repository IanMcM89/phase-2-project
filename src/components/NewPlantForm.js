import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

function NewPlantForm({ isLoggedIn, currentUser, onSubmit }) {
    const [activeSeasons, setActiveSeasons] = useState([]);
    const [formError, setFormError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        sunlight: '',
        water: '',
        season: '',
        description: '',
        poster: currentUser.username
    });

    const history = useHistory();

    if (!isLoggedIn) return <Redirect to="/login" />;

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

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

    function handleSeasonChange(e) {
        let seasonsArray = activeSeasons;

        if (activeSeasons.includes(e.target.textContent)) {
            seasonsArray = [...activeSeasons.filter(icon => icon !== e.target.textContent)]
            setActiveSeasons(seasonsArray);
        } else {
            seasonsArray = [ ...activeSeasons, e.target.textContent ]
            setActiveSeasons(seasonsArray);
        }

        return setFormData({...formData, season: seasonsArray.join('')});
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (Object.values(formData).includes('')) {
            return setFormError('All input fields must be filled before posting');
        } else {
            fetch('http://localhost:3000/plants', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            })
            .then(r => r.json())
            .then(newPlant => onSubmit(newPlant));

            return history.push("/");
        }
    }

    return (
        <main id="app-main">
            <form id="app-post-form" onSubmit={handleSubmit}>
                <h1>POST FORM</h1>
                <p className="post-form-message">Post a new plant to the MGBB database by filling out the form below:</p>
                <div id="post-inputs-container">
                    <div id="text-input-div">
                        <label htmlFor="name">Plant Name</label>
                        <div className="post-input">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="image">Plant Image</label>
                        <div className="post-input">
                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                value={formData.image}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="description">Description</label>
                        <div className="post-input-description">
                            <textarea
                                id=""
                                name="description"
                                placeholder="Description"
                                maxLength="230"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div id="icon-input-div">
                        <label htmlFor="sunlight">Sunlight Selector</label>
                        <div className='icon-input' name="sunlight">
                            <p className="icon" onClick={handleIconChange}>☀️</p>
                            <p className="icon" onClick={handleIconChange}>☀️</p>
                            <p className="icon" onClick={handleIconChange}>☀️</p>
                            <p className="icon" onClick={handleIconChange}>☀️</p>
                            <p className="icon" onClick={handleIconChange}>☀️</p>
                        </div>
                        <label htmlFor="water">Water Selector</label>
                        <div className='icon-input' name="water">
                            <p className="icon" onClick={handleIconChange}>💧</p>
                            <p className="icon" onClick={handleIconChange}>💧</p>
                            <p className="icon" onClick={handleIconChange}>💧</p>
                            <p className="icon" onClick={handleIconChange}>💧</p>
                            <p className="icon" onClick={handleIconChange}>💧</p>
                        </div>
                        <label htmlFor="season">Season Selector</label>
                        <div className='season-input' name="season">
                            <p className={activeSeasons.find(icon => icon === '🌱') ? 'icon-active' : 'icon'} onClick={handleSeasonChange}>🌱</p>
                            <p className={activeSeasons.find(icon => icon === '🏝️') ? 'icon-active' : 'icon'} onClick={handleSeasonChange}>🏝️</p>
                            <p className={activeSeasons.find(icon => icon === '🍂') ? 'icon-active' : 'icon'} onClick={handleSeasonChange}>🍂</p>
                            <p className={activeSeasons.find(icon => icon === '❄️') ? 'icon-active' : 'icon'} onClick={handleSeasonChange}>❄️</p>
                        </div>
                        <p className="form-error">{formError}</p>
                        <input id="post-submit" type="submit" value="POST"/>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default NewPlantForm;