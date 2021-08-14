import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import About from "./About";

const Router = () => {
  return (
    <>
      <div style={{ zIndex: 11 }}>
        <nav>
          <ul>
            <li id="logo">
              <Link to="/">
                <p
                  style={{
                    fontFamily: "cursive",
                    color: "rgb(3 ,182, 252)",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <strong>TRaVeller</strong>
                </p>
                {/* <img alt="Logo" /> */}
              </Link>
            </li>
            <li style={styles.floatRight}>
              <Link to="/About">About</Link>
            </li>
            <li style={styles.floatRight}>
              <Link to="/Map">Map</Link>
            </li>
            <li style={styles.floatRight}>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Map" component={App} />
        <Route exact path="/About" component={About} />
        <Route component={() => <h1>404 Page Not Found</h1>} />
      </Switch>
    </>
  );
};

export default Router;

const styles = {
  floatRight: {
    float: "right",
  },
};
