import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import "./login/styles/login.css"

// const API_URL = 'http://localhost:8000';
const API_URL = 'api/auth/';


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const history = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post("${API_URL}/register/", {
        username,
        email,
        password1,
        password2,
      });
      localStorage.setItem("token", response.data.key);
      history.push("/");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("${API_URL}/login/", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.key);
      history.push("/");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export { Register, Login };
