import React from 'react';
import {NavLink} from 'react-router-dom'
import "./css/Nav.css"

const Dropdown = ({isOpen, toggle}) => {
    return (
      <header className="headerText sticky top-0 z-50">
        <div
          className={
            isOpen
              ? "grid grid-rows-4 text-center items-center background"
              : "hidden"
          }
          onClick={toggle}
        >
            <NavLink
              to="/projects"
              activeClassName="titleText"
              className="inline-flex items-center p-1 mx-2 navButton text-sm"
            >
              Get Involved
            </NavLink>
            <NavLink
              to="/skills"
              activeClassName="titleText"
              className="inline-flex items-center p-1 mx-2 navButton text-sm"
            >
              Tech Academy
            </NavLink>
            <NavLink
              to="/resume"
              activeClassName="titleText"
              className="inline-flex items-center p-1 mx-2 navButton text-sm"
            >
              Job Training
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="titleText"
              className="inline-flex items-center p-1 mx-2 navButton text-sm"
            >
              Staff & Board
            </NavLink>
            <NavLink
            to="/contact"
            activeClassName="titleText"
            className="inline-flex items-center p-1 mx-2 cityLights text-sm"
            >
                Join City Lights
            </NavLink>
            <a
              href="https://give.cityofrefugeatl.org/give/270004/#!/donation/checkout"
              target="_blank"
              className="inline-flex items-center px-5 py-2 mx-2 donate text-xs md:text-sm"
            >
              Donate
            </a>
          </div>
      </header>
    );
}

export default Dropdown;