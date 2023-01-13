import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./container/Home";
import "../src/App.css";



function App() {
  return (
    <Router>
        <Route path="/" component={Home} exact/>
    </Router>
  );
}

export default App;
