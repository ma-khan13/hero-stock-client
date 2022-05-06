import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
      const [showMediaIcons, setShowMediaIcons] = useState(true);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Hero
          </Link>
          <button
            className="navbar-toggler"
            onClick={() => setShowMediaIcons(!showMediaIcons)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              showMediaIcons ? "collapse navbar-collapse" : "navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="text-start">
              <button type="button" className="btn btn-outline-light me-2">
                Sign-in
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;