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
  const history = useHistory();

  console.log(isSignedIn)

  useEffect(() => {
    fetch("http://localhost:3000/vegetables")
    .then(r => r.json())
    .then(veggieData => setVegetables(veggieData))
  }, []);

  function onUserLogin(user) {
    setIsSignedIn(!isSignedIn);

    return user;
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/create-account">
            <NewUserPage onUserLogin={onUserLogin} history={history}/>
          </Route>
          <Route path="/login">
            <UserLoginPage onUserLogin={onUserLogin} history={history} />
          </Route>
          <Route exact path="/">
            <VegetablePage isSignedIn={isSignedIn} vegetables={vegetables} setIsSignedIn={setIsSignedIn}/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;