import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';

// import i_login from "../../img/icons/🦆 icon _account login_.svg";

import i_login from "../../img/icons/🦆 icon _log in_.svg";
// import i_logout from "../../img/icons/🦆 icon _account logout_.svg";

import i_logout from "../../img/icons/🦆 icon _log out_.svg";
// import i_person from "../../img/icons/🦆 icon _person_.svg";
import i_person from "../../img/icons/🦆 icon _profile circled_.svg";
// import i_dollar from "frontend/src/img/icons/🦆 icon _dollar_.svg";
// import i_thumb from "frontend/src/img/icons/🦆 icon _thumb up_.svg";
// import i_timer from "frontend/src/img/icons/🦆 icon _timer_.svg";

const Navbar = () => {
  const activelink = "nav-list_link nav-list_link--active";
  const normallink = "nav-list_link";

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
                className={({ isActive }) => isActive ? activelink : normallink }>
                Home
              </NavLink>
            </li>
            <li className="nav-list_item">
            <Link to="home_body" smooth={true} duration={1000}>About us</Link>
              {/* <NavLink to="#" className={normallink }>
                About us
              </NavLink> */}
            </li>

            <li className="nav-list_item">
                
              <NavLink to="/auction" className={({ isActive }) => isActive ? activelink : normallink }>
                Auctions
              </NavLink>
            </li>
            <li className="nav-list_item">
                
             <NavLink to="/contactus" className={({ isActive }) => isActive ? activelink : normallink }>
                Contact us
              </NavLink>
            </li>
           
            <li className="nav-list_item">
              <NavLink to="/login">
                <img src={i_login}/>
              </NavLink>
            </li>
            <li className="nav-list_item">
              <NavLink to="/account">
                <img src={i_person}/>
              </NavLink>
            </li>
            <li className="nav-list_item">
              <NavLink to="/">
                <img src={i_logout}/>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
