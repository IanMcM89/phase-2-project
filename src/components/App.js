import React, {useEffect, useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useHistory} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [plants, setPlants] = useState([]);
  const history = useHistory();

  console.log(isLoggedIn)

  useEffect(() => {
    fetch("http://localhost:3000/vegetables")
    .then(r => r.json())
    .then(plantData => setPlants(plantData))
  }, []);

  function onLogin(user) {
    setIsLoggedIn(!isLoggedIn);

    return user;
  }

  return (
    <div className="app">
      <Header />
      <Main onLogin={onLogin} plants={plants} history={history} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Footer />
    </div>
  );
}

export default App;