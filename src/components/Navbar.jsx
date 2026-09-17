
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        <span>Study</span>Flow
      </Link>

      <div className="navbar-links">

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/planner"
          className={location.pathname === "/planner" ? "active" : ""}
        >
          Planner
        </Link>

        <Link
          to="/subjects"
          className={location.pathname === "/subjects" ? "active" : ""}
        >
          Subjects
        </Link>

        <Link
          to="/notes"
          className={location.pathname === "/notes" ? "active" : ""}
        >
          Notes
        </Link>

        <Link
          to="/progress"
          className={location.pathname === "/progress" ? "active" : ""}
        >
          Progress
        </Link>

        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          Profile
        </Link>

      </div>

      <Link to="/planner" className="navbar-button">
        Start Studying →
      </Link>

    </nav>
  );
}

export default Navbar;
