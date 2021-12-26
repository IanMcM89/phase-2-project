import React, {useState} from "react";
import Header from "./Header";
import UserLoginPage from "./UserLoginPage";
import NewUserPage from "./NewUserPage";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const history = useHistory();

  function onUserLogin() {
    setIsSignedIn(!isSignedIn);
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/create-account">
            <NewUserPage />
          </Route>
          <Route path="/login">
            <UserLoginPage onUserLogin={onUserLogin} history={history }/>
          </Route>
          <Route exact path="/">
            <Home isSignedIn={isSignedIn} />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;