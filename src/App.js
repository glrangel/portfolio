import React from "react";
import { Switch, Route, NavLink, useLocation} from "react-router-dom";
import './App.css';
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Background from "./components/Background";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// const MotionNavLink = motion.custom(NavLink);

function App() {
  const location = useLocation();
  return (
    <div className="container">
      <nav className="overlay">
        <div class="title">
          <h1 style={{color: "grey"}}>Gabriel Rangel</h1>
          <h1 style={{color: "#179ff4"}}>fullstack web developer </h1>
        </div>
        <div class="list">
          <NavLink to="/home">home</NavLink>
          <NavLink to="/portfolio">portfolio</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </nav>
      {/* location={location} key={location.pathname} */}
      <main>
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </AnimatePresence>
      </main>
      <Background />
    </div>
  );
}

export default App;
