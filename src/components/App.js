import React from "react";
import Header from "./Header";
import Login from "./Login";
import VegetablePage from "./VegetablePage";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div>
      <VegetablePage />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;