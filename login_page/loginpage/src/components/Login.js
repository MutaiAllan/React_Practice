import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LogIn({ user, setUser, admin, staff, setStaff, setAdmin, student, setStudent }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        console.log(r);
        r.json().then((user) => setUser(user));
        {admin ? (
            navigate("/admin")
        ): student ? (
            navigate("/students")
        ) : staff ? (
            navigate("/staff")
        ) : (
            navigate("/")
        )}
        
      }
    });
  }

  return (
    <div>
      <div className="div-form">
      <div className="text-right"> {/* Adjust text alignment */}
            <h1><span>S</span>nudge<span>.</span></h1><br></br>
            <h1>Welcome Back!</h1><br></br>
            </div>
          <div className="col-md-6 login-form">
           <form onSubmit={handleSubmit} className="mt-4 text-center">
            
            <div className="mb-3">
            <label htmlFor="email" className="form-label">
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="Password"
              className="form-control"
            />
            </div>

            <button type="submit" className="custom-center">Login</button>
          

          <p className="mt-3">
              By continuing you agree to our<br></br>{" "}
              <Link to="/terms">terms of service</Link>{" "}
              and <Link to="/privacypolicy">privacy policy</Link>
            </p>
            </form>
            </div>
        </div>
        <div className="div-image">
            <img src='https://images.pexels.com/photos/5948347/pexels-photo-5948347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
    </div>
  );
}

export default LogIn;
