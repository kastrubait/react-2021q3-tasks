import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Link, useHistory} from "react-router-dom";
import picture from "../../assets/img/picture.jpeg";
import "./style.scss";

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const history = useHistory();

  return (
    <header>
      <h1 className="app-heading">React and TypeScript App!</h1>
      <img src={picture} alt="rocket" className="center-img" />
      <nav className="navigation__container">
        <div className="navigation__link">
          {/* <Link className="nav-link" to="/">
            Home
          </Link> */}
          Home
        </div>
        <div className="navigation__link">
          {/* <Link className="nav-link" to="/about">
            About
          </Link> */}
          About
        </div>
      </nav>
    </header>
  );
};
