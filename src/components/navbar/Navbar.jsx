import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="container">
        <div className="logo">
          <h2>Kino HD</h2>
        </div>
        <nav>
          <ul className="navbarUl">
            <li>
              <Link className="Link" to="/melodrama">
                Melodrama
              </Link>
            </li>
            <li>
              <Link className="Link" to="/cartoon">
                Cartoon
              </Link>
            </li>
            <li>
              <Link className="Link" to="/horror">
                Horror
              </Link>
            </li>
            <li>
              <Link className="Link" to="/adventure">
                Adventure
              </Link>
            </li>
            <li>
              <Link className="Link" to="/16plus">
                16+
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
