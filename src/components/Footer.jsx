import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span>Study</span>Flow
          </Link>

          <p>
            A simple and smart study planner designed to help
            you organize your learning, track your progress
            and reach your goals.
          </p>

          <div className="footer-socials">
            <span>f</span>
            <span>in</span>
            <span>𝕏</span>
          </div>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/planner">Planner</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/notes">Notes</Link>

        </div>

        {/* STUDY */}
        <div className="footer-column">

          <h3>StudyFlow</h3>

          <Link to="/progress">Progress</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/planner">Study Plan</Link>
          <Link to="/subjects">My Courses</Link>

        </div>

        {/* CTA */}
        <div className="footer-cta">

          <span>READY TO START?</span>

          <h3>
            Make every study session count.
          </h3>

          <Link to="/planner">
            Start Studying →
          </Link>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 StudyFlow. All rights reserved.
        </p>

        <p>
          Designed for better learning.
        </p>

      </div>

    </footer>
  );
}

export default Footer;