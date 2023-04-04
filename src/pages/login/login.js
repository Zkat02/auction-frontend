import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/login.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Обработка отправки формы
  };

  return (
    <div className="login-page">

      <div className="login-page_about">
        <div className="login-page_title">FarmAuction</div>
        <div className="login-page_about_text">
        Добро пожаловать на овощную <NavLink to='/auction'>
        <strong>аукционную платформу</strong>
        </NavLink>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="login_form">
        <div className="login_form_title"> Sign In</div>
        If you don’t have an account register <br/>
        You can  
        <NavLink to='/registration'>
        <strong>Register here !</strong>
        </NavLink> 
        <label htmlFor="username">Имя пользователя:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <label htmlFor="password">Пароль:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;
