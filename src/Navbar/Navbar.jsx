import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div>
        <nav
              className="navbar navbar-expand-lg navbar-light navList"
              style={{
      
                width: "16rem",
          
              }}
            >
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      exact
                      to="/profile"
                    >
                      Profile
                    </NavLink>
                   
                  </li>
                  <hr className="h-line"/>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/post"
                    >
                      Post
                    </NavLink>
                  </li>
                  <hr className="h-line"/>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/gallery"
                    >
                      Gallery
                    </NavLink>
                  </li>
                  <hr className="h-line"/>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/todo"
                    >
                      ToDo
                    </NavLink>
                  </li>
                </ul>
          
              </div>
            </nav>
    </div>
  )
}
