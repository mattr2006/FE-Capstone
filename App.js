import "./App.css";
import "./components/Navbar.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ShowPage from "./pages/Show-Page";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <div className="links-wrapper">
        <nav>
          <div classname="link-wrapper">
            <a href="/">Home</a>
          </div>
          <div classname="link-wrapper">
            <a href="/about">About</a>
          </div>
          <div classname="link-wrapper">
            <a href="/gallery">Gallery</a>
          </div>
          <div classname="link-wrapper">
            <a href="/showpage">Show Page</a>
          </div>
        </nav>

        <BrowserRouter>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Switch>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
          <Switch>
            <Route path="/showpage">
              <ShowPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
