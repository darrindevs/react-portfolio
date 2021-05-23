import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/project1"
          className={location.pathname === "/project1" ? "nav-link active" : "nav-link"}
        >
          Project 1
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/project2"
          className={location.pathname === "/project2" ? "nav-link active" : "nav-link"}
        >
          Project 2
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/project3"
          className={location.pathname === "/project3" ? "nav-link active" : "nav-link"}
        >
          Project 3
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/project4"
          className={location.pathname === "/project4" ? "nav-link active" : "nav-link"}
        >
          Project 4
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/project5"
          className={location.pathname === "/project5" ? "nav-link active" : "nav-link"}
        >
          Project 5
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/project6"
          className={location.pathname === "/project6" ? "nav-link active" : "nav-link"}
        >
          Project 6
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
