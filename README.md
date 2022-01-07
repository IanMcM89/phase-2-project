# My Gardener's Black Book

MGBB, or "My Gardener's Black Book", is a database containing information on different plants posted by various users. Users can post any plant they want to the database, using the app's post form, for other users to refer back to for quick tips and information for gardening projects.

## Features

<ul>
    <li>Database with information on various plants.</li>
    <li>Sunlight exposure recommendations.</li>
    <li>Basic water requirements for each plant.</li>
    <li>Best season or seasons to start plants.</li>
    <li>A short description of each plant and an image for reference.</li>
    <li>Ability to add and remove a plant from a user's favorites tab.</li>
    <li>Post form that allows a user to post a new plant to the MGBB database.</li>
</ul>

## Usage

A user can create a new user profile by clicking <strong>Create an Account</strong> on the login page, which will redirect the user to the registration page:

<img 
    src="/home/ian/code/labs/phase2/phase-2-project/public/images/readme/mgbb-register.png" 
    alt="MGBB Registration Page"
    width=75% align=center
/>

After successful account creation, the user will be redirected to the login page where the new credentials can be used to access their user's profile by clicking the <strong>Sign In</strong> button:

<img 
    src="/home/ian/code/labs/phase2/phase-2-project/public/images/readme/mgbb-login.png"
    alt="MGBB Login Page"
    width=75% align=center
/>

The home page, or user profile page, consists of information cards for a variety of plants. Details include recommended sunlight exposure levels, for example, partial to full sun is equal to roughly four to five ☀️ icons on the scale. The more ☀️ icons (up to five), the more sun exposure the plant requires. The same can be said for the water, the more 💧 icons, the more frequent watering the plant requires. Figure a single 💧 icon is roughly once a week. The seasons icons represent the best seasons in which the plant should be cultivated. Some plants can be planted in all seasons, but these icons are the recommended seasons for best results and/or best harvesting once the plant is mature in the case of a vegetable. Seasons are intuitive (🌱 = Spring, 🏝️ = Summer, 🍂 = Fall and ❄️ = Winter). Each plant card also has a short description and an image for reference.

<img 
    src="/home/ian/code/labs/phase2/phase-2-project/public/images/readme/mgbb-home.png" 
    alt="MGBB Home Page"
    width=75% align=center
/>

Users can add plant cards to their favorites tab by clicking the ⭐ icon on the plant card. All favorited plants will be added to the favorites tab for quick reference in the future. To remove a plant from a user's favorites, simply cick the ⭐ icon again: 

<img 
    src="/home/ian/code/labs/phase2/phase-2-project/public/images/readme/mgbb-favorites.png" 
    alt="MGBB Favorites Page"
    width=75% align=center
/>

Users can also post a new plant card to the database by clicking the <strong>POST</strong> tab in the dashboard and filling out the required form inputs and clicking the <strong>POST</strong> button:

<img 
    src="/home/ian/code/labs/phase2/phase-2-project/public/images/readme/mgbb-post.png" 
    alt="MGBB Post Form"
    width=75% align=center
/>

To logout of a user profile, simply click the <strong>LOGOUT</strong> tab in the top right of the dashboard.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Image Credits

All images used in the creation of this app are provided by [pixabay](https://pixabay.com/) and are free for commercial use.

<ul>
    <li>MGBB Logo:  jeresta/13724641</li>
    <li>Background: ejaugsburg</li>
    <li>Cilantro: newtonisimo</li>
    <li>Lemon: SpencerWing</li>
    <li>Rosemary: Samueles</li>
    <li>Basil: ka_re</li>
    <li>Thyme:      Hans</li>
    <li>Lettuce:    422737</li>
    <li>Pepper:     JillWellington</li>
    <li>Onion:      MabelAmber</li>
    <li>Celery:     ulleo</li>
    <li>Carrot:     rauschenberger</li>
    <li>Potato:     outsideclick</li>
    <li>Garlic:     congerdesign</li>
    <li>Air Plant:  jeonsango</li>
    <li>Orange:     Capri23auto</li>
    <li>Tomato:     planet_fox</li>
</ul>