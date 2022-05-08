import { useState } from "react";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firbase/firbase.init";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true);
  let [user] = useAuthState(auth);
  let handleSignOut = () => {
    signOut(auth);
  };
  let userName = auth?.currentUser?.displayName;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Hero Stock
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              {user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-invantory">
                    Manage Inventory
                  </Link>
                </li>
              ) : (
                ""
              )}
              {user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/addstock">
                    Add Stock
                  </Link>
                </li>
              ) : (
                ""
              )}
              {user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/mystock">
                    My Stock
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="text-start">
              {user ? (
                <div className="d-flex">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        {userName}
                      </Link>
                    </li>
                  </ul>
                  <Link
                    to="/"
                    onClick={handleSignOut}
                    className="btn btn-outline-warning"
                  >
                    Signi-Out
                  </Link>
                </div>
              ) : (
                <>
                  <Link to="/signin" className="btn btn-outline-light me-2">
                    Sign-In
                  </Link>
                  <Link to="/signup" className="btn btn-warning">
                    Sign-Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;