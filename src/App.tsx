import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Echo from './pages/echo';
import Home from './pages/home/home';


function App() {
  return (
    <Router>
        <Switch>
        <Route path="/echo">
            <Echo />
          </Route>
          <Route path="/">
            <Home />
          </Route>          
        </Switch>      
    </Router>
  );
}
export default App;
