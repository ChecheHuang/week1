import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
    </Switch>
    </Router>
  );
}
