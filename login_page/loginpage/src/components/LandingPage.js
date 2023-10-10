import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Nav";
import Home from './Home';
import About from './About';
import Contact from './Contact';


function LandingPage() {
  const [user, setUser] = useState(null);    

  return (
    <div className="App">
       
    <>
    <NavBar />
      <Home />
      <About />
      <Contact />
    </>
    </div>
  );
}

export default LandingPage;