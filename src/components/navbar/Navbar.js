import "./navbar.css";

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import i_login from "../../img/icons/🦆 icon _log in_.svg";
import i_logout from "../../img/icons/🦆 icon _log out_.svg";
import i_person from "../../img/icons/🦆 icon _profile circled_.svg";
import React, { useState } from "react";
import { Logout } from "../../pages/auth/authentication";

const Navbar = () => {
  const activelink = "nav-list_link nav-list_link--active";
  const normallink = "nav-list_link";
  // const authenticated = sessionStorage.getItem("token")? true : false;

  const [token, setToken] = useState(sessionStorage.getItem("token"));

  function hasToken() {
    return token !== null;
  }

  // function handleAccountClick() {
  //   // перенаправляем пользователя на страницу аккаунта
  //   window.location.href = "/account";
  // }

  function handleLogout() {
    console.log("logout")
    Logout()
      .then(() => {
        // выполнение дополнительных действий после успешного логаута
        // например, перенаправление на главную страницу
        window.location.href = '/';
      })
      .catch(error => console.error(error));
  }


  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_row">
          <NavLink to="/" className="logo">
            FarmAuction
          </NavLink>

          <ul className="nav-list">
            <li className="nav-list_item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activelink : normallink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list_item">
              <Link to="home_body" smooth={true} duration={1000}>
                About us
              </Link>
              {/* <NavLink to="#" className={normallink }>
                About us
              </NavLink> */}
            </li>

            <li className="nav-list_item">
              <NavLink
                to="/auction"
                className={({ isActive }) =>
                  isActive ? activelink : normallink
                }
              >
                Auctions
              </NavLink>
            </li>
            <li className="nav-list_item">
              <NavLink
                to="/contact_us"
                className={({ isActive }) =>
                  isActive ? activelink : normallink
                }
              >
                Contact us
              </NavLink>
            </li>

            {!hasToken() && (
              <li className="nav-list_item">
                <NavLink to="/auth/login">
                  <img src={i_login} alt="login" />
                </NavLink>
              </li>
            )}

            {hasToken() && (
              <li className="nav-list_item">
                <NavLink to="/account">
                  <img src={i_person} alt="account" />
                </NavLink>
              </li>
            )}

            {hasToken() && (
              <li className="nav-list_item">
                <NavLink to="/" onClick={handleLogout}>
                  <img src={i_logout} alt="logout" />
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
