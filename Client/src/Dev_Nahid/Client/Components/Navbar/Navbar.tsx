import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-color text-[24px] font-bold">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Academic Info</a>
                  <ul className="p-2">
                    <li>
                      <a>Notice Board</a>
                    </li>
                    <li>
                      <a>Admission</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Teacher Info</a>
                </li>
                <li>
                  <a>Our Classroom</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              School Management
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Academic Info</summary>
                  <ul className="p-2">
                    <li>
                      <a>Notice Board</a>
                    </li>
                    <li>
                      <a>Admission</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Teacher Info</a>
              </li>
              <li>
                <a>Our Classroom</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/asset/avatar.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;