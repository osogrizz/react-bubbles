import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute exact path="/BubblePage" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
