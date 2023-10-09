import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/Login";

function App() {
  const [user, setUser] = useState(null);    

  return (
    <div className="App">
    <Router>
        <main>
            <Routes>
              {/* <Route path="/staff" element={<Staff />} />
              <Route path="/student" element={<Student />} />
              <Route path="/admin" element={<Admin />} /> */}
              <Route path="/login" element={<LogIn setUser={setUser} />} />
            </Routes>
        </main>
    </Router>
    </div>
  );
}

export default App;