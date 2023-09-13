import React from "react";
import { Link , NavLink} from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top p-3">
        <div className="container">
          <Link className="logo navbar-brand" to='' >
          START FRAMEWORK

          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to='about'>
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='portoflio'>
                    PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='contact'>
                  CONTACT
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
