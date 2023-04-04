import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/registration.css";

function RegistrationPage() {
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
        <div className="login_form_title"> Registration</div>
        If you have an account login <br/>
        You can <NavLink to='/login'>
        <strong>Login here !</strong>
        </NavLink> 
        <label htmlFor="username">Имя пользователя:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="enter your login name"
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
          placeholder="enter your password"
        />
        <br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
