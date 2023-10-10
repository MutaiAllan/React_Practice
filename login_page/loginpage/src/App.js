import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/Login";
import NavBar from "./components/Nav";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from "./components/LandingPage";

function App() {
  const [user, setUser] = useState(null);    

  return (
    <div className="App">
       
    <Router>
        <main>
            <Routes>
            <Route path="/" element={<LandingPage/>} />
              <Route path="/login" element={<LogIn setUser={setUser} />} />
            </Routes>
        </main>
    </Router>
    </div>
  );
}

export default App;