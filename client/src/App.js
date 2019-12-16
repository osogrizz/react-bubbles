import React from "react";
import { BrowserRouter as Router, Route, Switch, Link  } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  return (
    <Router>
    <div>
      <Link to="/login" >Login</Link>
      <Link to="/colors" >BubblePage</Link>
    </div>  


      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route component={Login}/>
          <PrivateRoute exact path="/colors" component={BubblePage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
