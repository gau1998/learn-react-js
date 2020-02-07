import React from "react";
import "./App.css";
import Home from "./Views/Home";
import About from "./Views/About";
import Listing from "./Views/Listing";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/login/" component={Login} />
            <Route path="/register/" component={Register} />
            <Route path="/listing" component={Listing} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
