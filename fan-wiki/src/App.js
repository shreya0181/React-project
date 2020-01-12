import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header";
import Home from "./home";
import Locations from "./Locations";
import Res from "./res";
import Character from "./character";
import Episode from "./episode";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      // browserRouter handles the complete routing, history saves the last path .
      <BrowserRouter history="browserHistory">
        <div style={{ backgroundColor: "#DCDCDC" }}>
          <Header />
          <hr style={{ margin: "0px", backgroundColor: "lightblue" }}></hr>
          <div>
            <div class="row">
              <div class="col-sm-2" style={{ paddingLeft: "70px" }}>
                <ul style={{ listStyleType: "none" }}>
                  {/* linking to particular location though only "locations" works as guided */}
                  <li>
                    <Link to="/locations" name>
                      Locations
                    </Link>
                  </li>
                  <li>
                    <Link to="/characters">Characters</Link>
                  </li>
                  <li>
                    <Link to="/episodes">Episodes</Link>
                  </li>
                </ul>
              </div>
              {/* //routing using switch Route navigates to gin path. */}
              <div class="col-sm-10" id="display">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route
                    exact
                    path="/locations"
                    render={props => <Locations />}
                  />
                  >
                  <Route exact path="/res" render={props => <Res />} />
                  <Route exact path="/character">
                    <Character />
                  </Route>
                  <Route exact path="/episode">
                    <Episode />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
