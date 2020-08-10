import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const pages = [{ pageName: "Home", pagePath: "/", pageItem: <Home /> }, {}, {}];

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {pages.map((item, key) => (
            <Route path={item.pagePath} key={key}>
              <div>{item.pageItem}</div>
            </Route>
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
