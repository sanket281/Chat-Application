import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Signupp from "./components/Signupp";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/> 
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/signup" element={<Signupp/>}/>
          <Route exact path="/login" element={<Login/>}/>
          
        </Routes>
      </Router>
     <h1>hello</h1>
    
    </div>
  );
}

export default App;
