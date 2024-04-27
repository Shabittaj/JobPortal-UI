import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";
import "./Navbar.css";
import { useAuth } from "../../AuthContext";

const Navbar = () => {
  const { user } = useAuth();
  const [icon, setIcon] = useState(false);
  const [scrollTopVisible, setScrollTopVisible] = useState(false); // Define state for scroll visibility

  const closeSideDrawer = () => {
    setIcon(false);
  };

  const handleClick = () => {
    setIcon(!icon);
  };

  useEffect(() => {
    // Add scroll event listener to show/hide the scroll-to-top button
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 200) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = () => {
    if (window.pageYOffset > 0) {
      // Check if the page is not already at the top
      scrollToTop();
    }
    closeSideDrawer(); // Close side drawer if open
  };

  return (
    <>
      <nav className="nav">
        <Link to="/home" className="nav-logo" onClick={closeSideDrawer}>
          JOB <span>PORTAL</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {icon ? (
            <FaTimes className="fa-Times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>
        <ul className={icon ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/home" className="nav-links" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="nav-links" onClick={handleLinkClick}>
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          {user && (
            <li>
              {user.role === "jobSeeker" ? (
                <Link to="/jobseekerprofile" className="nav-links">
                  <img
                    src="/user-1177568-1@2x.png"
                    className="profile-logo"
                    alt="Profile"
                  />
                </Link>
              ) : (
                <Link to="/employerprofile" className="nav-links">
                  <img
                    src="/user-1177568-1@2x.png"
                    className="profile-logo"
                    alt="Profile"
                  />
                </Link>
              )}
            </li>
          )}
        </ul>
      </nav>
      {scrollTopVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default Navbar;
