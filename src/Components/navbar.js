import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../images/x.svg";
import { ReactComponent as MenuIcon } from "../images/menu.svg";
import { Link } from "react-router-dom";
import "../css/style.css";
import styled from "styled-components";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <MainNavbar>
      <div className="navbar-left">eLearning</div>
      <ul className={click ? "navbar-right active" : "navbar-right"}>
        <li onClick={closeMobileMenu}>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link className="link" to="/viewcourse">
            View-Course
          </Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link className="link" to="/create">
            Create-Course
          </Link>
        </li>
        <li className="" onClick={closeMobileMenu}>
          <Link to="/login" className="login-btn link">
            Login
          </Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link to="/register" className="signup-btn link">
            Register
          </Link>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon-x" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </MainNavbar>
  );
};

const MainNavbar = styled.div`
  width: 100vw;
  height: 80px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: white;
  padding: 10px 24px;
  cursor: pointer;
  box-shadow: 0 0 15px 0 rgb(2 59 109 / 10%);
`;

export default Navbar;
