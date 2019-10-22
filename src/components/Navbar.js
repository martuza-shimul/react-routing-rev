import React from "react";
import { Link, NavLink, withRouter } from 'react-router-dom'; //? withRouter is an higher-order component

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-2">
      <div className="container">
        <Link className="brand-logo" to='/'> Practice'Times </Link>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
