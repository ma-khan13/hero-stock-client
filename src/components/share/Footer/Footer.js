import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="container">
      <footer className="py-3 mt-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link px-2 text-muted">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/signin"} className="nav-link px-2 text-muted">
              SignIn
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link px-2 text-muted">
              SignUn
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">
          &copy; {year} Hero programmer, Inc
        </p>
      </footer>
    </div>
  );
};

export default Footer;
