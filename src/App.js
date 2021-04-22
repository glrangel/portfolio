import React from "react";
import { Switch, Route, NavLink} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Background from "./components/Background";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <nav className="overlay">
        <div class="title">
          <h1 style={{color: "grey"}}>Gabriel Rangel</h1>
          <h1 style={{color: "#179ff4"}}>fullstack web developer </h1>
        </div>
        <div class="list">
          <NavLink to="/portfolio">portfolio</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </nav>
      {/* location={location} key={location.pathname} */}
      <main>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <Background />
    </div>
  );
}

export default App;
