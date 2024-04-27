import "./Footer.css";
import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";

const Footer = () => {
  const [icon, setIcon] = useState(false);
  const [scrollTopVisible, setScrollTopVisible] = useState(false); // Define state for scroll visibility

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

  const closeSideDrawer = () => {
    setIcon(false);
  };

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
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12 ft-1">
            <Link to="/home" className="footer-logo">
              JOB <span>PORTAL</span>
            </Link>
            <p>
              A job portal website is an online platform designed to connect job
              seekers with potential employers. It typically allows users to
              create profiles, upload resumes, and search for job opportunities
              based on various criteria.
            </p>
            <div className="footer-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <a href="https://www.linkedin.com/in/sameer-s-44a1b2203?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BswwSgTSpTraQKDzMapNxyg%3D%3D">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h3>Quick Links</h3>
            <ul>
              <li className="nav-item">
                <Link to="/home" className="links" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jobs" className="links" onClick={handleLinkClick}>
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="links" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="links" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-4 col-12 ft-3">
            <h3>Contact Info</h3>
            <p>
              <i className="fa-solid fa-phone-volume"></i>+91 9876543210
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>jobportal@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>Chennai, India
            </p>
          </div>
        </div>
      </div>
      <div className="last-Footer">
        <p>Designed By Sameer</p>
      </div>
    </div>
  );
};

export default Footer;
