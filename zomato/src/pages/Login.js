import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { login } from "./Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);

    try {
      const token = await login(email, password);
      console.log("Login Successful,token:", token);
      // alert("login succesful");
      window.location.href ="/";
      setError("Login failed");
      
    } catch (err) {
      console.error("login error:", err);
      setError("Login failed");
    }
  };

  return (
    <div>
      <div className="body">
        <div className="card loginn">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <br />
            <label>Password</label>
            <input
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></input>
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}></p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
