import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function NewPlantForm({ isLoggedIn }) {
    const [formData, setFormData] = useState({
        name: '',
        imageUrl: '',
        sunlight: '',
        water: '',
        season: '',
        description: ''
    });

    console.log(formData)

    if (!isLoggedIn) return <Redirect to="/login" />;

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleIconChange(e) {
        const iconArray = [...e.target.parentElement.children];
    
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

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <main id="app-main">
            <form id="app-post-form" onSubmit={handleSubmit}>
                <h1>POST PLANT</h1>
                <p className="login-message">Post a new plant to the MGBB database:</p>
                <div id="post-inputs-container">
                    <div className="post-input">
                        <input
                            type="text"
                            name="name"
                            placeholder="Plant Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="post-input">
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Image URL"
                            value={formData.imageUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='icon-input' name="sunlight">
                    <label for="sunlight">Select Sunlight Level:</label>
                        <p className="icon" onClick={handleIconChange}>☀️</p>
                        <p className="icon" onClick={handleIconChange}>☀️</p>
                        <p className="icon" onClick={handleIconChange}>☀️</p>
                        <p className="icon" onClick={handleIconChange}>☀️</p>
                        <p className="icon" onClick={handleIconChange}>☀️</p>
                    </div>
                    <div className='icon-input' name="water">
                    <label for="water">Select Water Level:</label>
                        <p className="icon" onClick={handleIconChange}>💧</p>
                        <p className="icon" onClick={handleIconChange}>💧</p>
                        <p className="icon" onClick={handleIconChange}>💧</p>
                        <p className="icon" onClick={handleIconChange}>💧</p>
                        <p className="icon" onClick={handleIconChange}>💧</p>
                    </div>
                    <div className='icon-input' name="season">
                        <label for="season">Select Season:</label>
                        <label for="spring">🌱</label>
                        <input type="radio" name="spring" value="🌱" onChange={(e) => console.log(e.target.value)}/>
                        <label for="summer">🏝️</label>
                        <input type="radio" name="summer" value="🏝️" onChange={(e) => console.log(e.target.value)}/>
                        <label for="fall">🍂</label>
                        <input type="radio" name="fall" value="🍂" onChange={(e) => console.log(e.target.value)}/>
                        <label for="winter">❄️</label>
                        <input type="radio" name="winter" value="❄️" onChange={(e) => console.log(e.target.value)}/>
                    </div>
                    <div className="post-input">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <p className="login-error"></p>
                <input id="post-submit" type="submit" value="Post Plant"/>
            </form>
        </main>
    );
}

export default NewPlantForm;

// function handleSunInput(e) {
//     const sunArray = [...e.target.parentElement.children];

//     sunArray.forEach(sun => {
//         let index = sunArray.indexOf(e.target);

//         if (sun.className === 'sun') {
//             sunArray.filter(sun => sunArray.indexOf(sun) <= index).forEach(sun => sun.className = 'sun-active');
//         } else {
//             sunArray.filter(sun => sunArray.indexOf(sun) > index).forEach(sun => sun.className = 'sun');
//         }
//     })

//     const sunLevel = sunArray.filter(sun => sun.className === 'sun-active').map(sun => sun = sun.textContent).join('');

//     setFormData({...formData, sunlight: sunLevel});
// }