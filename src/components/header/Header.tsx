/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import picture from "../../assets/img/picture.jpeg";
import "./style.scss";

export const Header: React.FC = () => {
  const history = useHistory();

  return (
    <header>
      <h1 className="app-heading">React and TypeScript App!</h1>
      <img src={picture} alt="rocket" className="center-img" />
      <nav className="navigation__container">
        <NavLink
          className="navigation_link"
          activeClassName="link__active"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="navigation_link"
          activeClassName="link__active"
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};
