import React, {useEffect, useState} from "react";
import Header from "./Header";
import NewUserPage from "./NewUserPage";
import UserLoginPage from "./UserLoginPage";
import VegetablePage from "./VegetablePage";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [vegetables, setVegetables] = useState([]);
  const [userVegetables, setUserVegetables] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/vegetables")
    .then(r => r.json())
    .then(veggieData => setVegetables(veggieData))
  }, []);

  function onUserLogin(user) {
    setIsSignedIn(!isSignedIn);
    setUserVegetables(vegetables.filter(veggie => veggie.users.includes(user)))

    return user;
  }

  console.log(`isSignedIn = ${isSignedIn}`)

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/create-account">
            <NewUserPage onUserLogin={onUserLogin} history={history}/>
          </Route>
          <Route path="/login">
            <UserLoginPage onUserLogin={onUserLogin} history={history}/>
          </Route>
          <Route exact path="/">
            <VegetablePage isSignedIn={isSignedIn} userVegetables={userVegetables}/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;