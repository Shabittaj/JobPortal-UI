import React, { useState } from "react";
import "./Home.css";
import { TitleImg } from "../../assets";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/jobs?searchQuery=${keyword}`);
  };

  const handleClick = (e) => {
    navigate("/about");
  };

  const handleTextClick = (e, clickedText) => {
    setKeyword(clickedText);
    navigate(`/jobs?searchQuery=${clickedText}`);
  };

  return (
    <>
      <div className="home">
        <div className="banner">
          <div className="container title-div">
            <h2 className="title" style={{ paddingTop: "50px" }}>
              Explore Open Career
            </h2>
            <p className="title fs-1 green" style={{ paddingTop: "50px" }}>
              Opportunities
            </p>
            <p
              className="content"
              style={{ paddingTop: "50px", fontSize: "1.2rem" }}
            >
              2400+ Peoples are daily search in this portal.
            </p>
            <form className="banner-form">
              <div className="row sm-gutters">
                <div className="col-sm-7" style={{ transition: "0.5s" }}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="search"
                      placeholder="Keywords, Profession or Name"
                      className="form-control"
                      autoComplete="off"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)} // Update state on input change
                    />
                    <button onClick={handleSubmit}>
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div>
              <p className="content2">
                {/* Suggested Tags : Data Analyst, Web Developer, React Developer,
                Software Engineer */}
                <span
                  className="badge bg-light text-dark border border-secondary mx-1"
                  onClick={(e) => handleTextClick(e, "Data Analyst")}
                >
                  Data Analyst
                </span>
                <span
                  className="badge bg-light text-dark border border-secondary mx-1"
                  onClick={(e) => handleTextClick(e, "Web Developer")}
                >
                  Web Developer
                </span>
                <span
                  className="badge bg-light text-dark border border-secondary mx-1"
                  onClick={(e) => handleTextClick(e, "React Developer")}
                >
                  React Developer
                </span>
                <span
                  className="badge bg-light text-dark border border-secondary mx-1"
                  onClick={(e) => handleTextClick(e, "Software Engineer")}
                >
                  Software Engineer
                </span>
                <span
                  className="badge bg-light text-dark border border-secondary mx-1"
                  onClick={(e) => handleTextClick(e, "Game")}
                >
                  Game
                </span>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={TitleImg} />
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <h1 className="mb-4 text-center">Our Trusted Companies</h1>
          </div>
          <div className="container">
            <h2 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Explore By <span>Category</span>
            </h2>
            <div className="row g-4">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a className="cat-item rounded p-4" href="/jobs">
                  <i className="fa fa-3x fa-mail-bulk  mb-4"></i>
                  <h6 className="mb-3">Marketing</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a className="cat-item rounded p-4" href="/jobs">
                  <i className="fa fa-3x fa-headset  mb-4"></i>
                  <h6 className="mb-3">Customer Service</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a className="cat-item rounded p-4" href="/jobs">
                  <i className="fa fa-3x fa-user-tie  mb-4"></i>
                  <h6 className="mb-3">Human Resource</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <a className="cat-item rounded p-4" href="/jobs">
                  <i className="fa fa-3x fa-tasks  mb-4"></i>
                  <h6 className="mb-3">Project Management</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a className="cat-item rounded p-4" href="/jobs">
                  <i className="fa fa-3x fa-chart-line  mb-4"></i>
                  <h6 className="mb-3">Business Development</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a className="cat-item rounded p-4" href="/jobs">
                  <i className="fa fa-3x fa-hands-helping mb-4"></i>
                  <h6 className="mb-3">Sales & Communication</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a className="cat-item rounded p-4" href="/jobs">
                  <i className="fa fa-3x fa-book-reader  mb-4"></i>
                  <h6 className="mb-3">Teaching & Education</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <a className="cat-item rounded p-4" href="/jobs">
                  <i className="fa fa-3x fa-drafting-compass  mb-4"></i>
                  <h6 className="mb-3">Design & Creative</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="row g-0 about-bg rounded overflow-hidden">
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid w-100"
                      src="/img/about-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid"
                      src="/img/about-2.jpg"
                      alt=""
                      style={{ width: "85%", marginTop: "15%" }}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid"
                      src="/img/about-3.jpg"
                      alt=""
                      style={{ width: "85%" }}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid w-100"
                      src="/img/about-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="mb-4">
                  We Help To Get The Best Job And Find A Talent
                </h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>Comprehensive
                  Job Listings
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>Personalized
                  Profiles
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>Career
                  Resources
                </p>
                <a className="btn btnn py-3 px-5 mt-3" onClick={handleClick}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
