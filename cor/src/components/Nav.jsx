import React from "react";
import { NavLink } from "react-router-dom"
import "./css/Nav.css"

export default function NavBar({toggle}) {
  return (
    <header className="sticky top-0 z-50">
      <div>
        <nav className="headerText flex justify-between items-center h-36 background relative shadow-sm text-gray-100">
          <NavLink
            to="/"
            className="titleText inflex-flex items-center py-6 px-3 ml-24 rounded text-4xl font-bold  tracking-widest "
          >
            City Of Refuge
          </NavLink>

          <div className="px-4.cursor-pointer md:hidden" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="orange"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>  
          <div className="pr-8 md:block hidden">
            <div class="relative inline-block text-left">
                <div>
                    <button type="button" className="dropdown inline-flex items-center p-1 mx-2 navButton text-sm">
                    Get Involved
                    </button>
                    {/* <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg transition ease-${dropdown ? 'out' : 'in'} duration-${dropdown ? '100' : '75'} transform opacity-${dropdown ? '100' : '0'} scale-${dropdown ? '100' : '95'}" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Applications</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Become a Partner</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Events</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Take a Tour</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Volunteer</a>
                        </div>
                    </div> */}
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
    </header>
  );
}