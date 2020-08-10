import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const pages = [{ pageName: "Home", pagePath: "/", pageItem: <Home /> }, {}, {}];

class App extends Component {
  render() {
    return (
      <Switch>
        {pages.map((item, key) => (
          <Route path={item.pagePath} key={key}>
            <div className="container">{item.pageItem}</div>
          </Route>
        ))}
      </Switch>
    );
  }
}

export default App;
