import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Tyres Shop
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Tyres
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/add-tyre" className="nav-link">
                Add Tyre
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create-brand" className="nav-link">
                Create Brand
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
