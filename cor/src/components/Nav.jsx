import React from "react";
import { NavLink } from "react-router-dom"
import "./css/Nav.css"

export default function NavBar({toggle}) {

  
  return (
      <div>
        <nav className="headerText flex justify-between items-center h-36 background relative shadow-sm text-gray-100">
          <NavLink
            to="/"
            className="titleText inflex-flex items-center py-6 px-3 ml-24 rounded text-4xl font-bold  tracking-widest"
          >
            City Of Refuge
          </NavLink>
          <div className="pr-8 md:block hidden">
            <div class="relative inline-block text-left">
              <div class="dropdown inline-block relative">
                <button type="button" className="dropdown inline-flex items-center p-1 mx-2 navButton text-sm background">
                  <span class="mr-1">Get Involved</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden pt-1">
                  <li class=""><a href="#" className="items-center p-1 mx-2 navButton text-sm background py-2 px-8 block whitespace-no-wrap">Applications</a></li>
                  <li class=""><a href="#" className="items-center p-1 mx-2 navButton text-sm background py-2 px-8 block whitespace-no-wrap">Become a Partner</a></li>
                  <li class=""><a href="#" className="items-center p-1 mx-2 navButton text-sm background py-2 px-8 block whitespace-no-wrap">Events</a></li>
                  <li class=""><a href="#" className="items-center p-1 mx-2 navButton text-sm background py-2 px-8 block whitespace-no-wrap">Take a Tour</a></li>
                  <li class=""><a href="#" className="items-center p-1 mx-2 navButton text-sm background py-2 px-8 block whitespace-no-wrap">Volunteer</a></li>
                </ul>
              </div>
            </div>
            <NavLink
              to="/tech"
              activeClassName="titleText"
              className="inline-flex items-center p-1 mx-2 navButton text-sm"
            >
              Tech Academy
            </NavLink>
            <NavLink
              to="/job-training"
              activeClassName="titleText"
              className="inline-flex items-center p-1 mx-2 navButton text-sm"
            >
              Job Training
            </NavLink>
            <NavLink
              to="/our-staff"
              activeClassName="titleText"
              className="inline-flex items-center p-1 mx-2 navButton text-sm"
            >
              Staff & Board
            </NavLink>
            <NavLink
            to="/citylights"
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
        </nav>
      </div>
  );
}