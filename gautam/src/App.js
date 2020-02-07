import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Listing from './Listing';
import Login from './Login';
import Register from './Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import navbar from './Navbar';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        
        <Router>
      

         

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/listing">
                <Listing />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            </Router>
          </div>
        
        
      
      
      
    
    );
  }
}

export default App;
