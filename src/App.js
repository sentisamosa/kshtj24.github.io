import React, { Component } from "react";
import profilepic from "./assets/profilepic.jpg";
import { Switch, Route, Link } from "react-router-dom";

const pages = [{}, {}, {}, {}];
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/">
          <div>
            <img
              src={profilepic}
              alt="profilePic"
              className="rounded-circle mx-auto d-block img-fluid w-25"
            />
          </div>
        </Route>
      </Switch>
    );
  }
}

export default App;
