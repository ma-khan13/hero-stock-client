import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
      const [showMediaIcons, setShowMediaIcons] = useState(true);
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Hero
          </Link>
          <button
            class="navbar-toggler"
            onClick={() => setShowMediaIcons(!showMediaIcons)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={
              showMediaIcons ? "collapse navbar-collapse" : "navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="blog">
                  Blog
                </Link>
              </li>
            </ul>
            <div class="text-start">
              <button type="button" class="btn btn-outline-light me-2">
                Sign-in
              </button>
              <button type="button" class="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;