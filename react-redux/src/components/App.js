import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/:id" Component={Detail}/>
      </Routes>
    </Router>
  );
}

export default App;
