import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSearch, handleToggleSearch, recipePage, title, setTitle, setQueryTitle }) => {

  const navigate = useNavigate();
  const goToAddRecipePage = () => {
    navigate("/recipe/add-recipe");
  };
  const handleSearch = () => {
    // handleToggleSearch();
    setQueryTitle(title);
  }
  const handleReset = () => {
    handleToggleSearch();
    setQueryTitle('');
  }
  return (
    <section>
      {" "}
      {toggleSearch && !recipePage && (
        <div className="search-wrapper">
          {/* Close Btn */}
          <div className="close-btn" onClick={handleReset}>
            <i className="fa fa-times" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form>
                  <input
                    name="search"
                    placeholder="Search Recipes"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <button type="button" onClick={handleSearch}>
                    <i className="fa fa-search search-btn" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ##### Header Area Start ##### */}
      <header className="header-area">
        {/* Navbar Area */}
        <div className="delicious-main-menu" id="sticky">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              {/* Menu */}
              <nav
                className="classy-navbar justify-content-between"
                id="deliciousNav"
              >
                {/* Logo */}
                <a className="nav-brand" href="/">
                  <img src="/img/core-img/logo.png" alt="" />
                </a>
                {/* Navbar Toggler */}
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                {/* Menu */}
                <div className="classy-menu">
                  {/* close btn */}
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top" />
                      <span className="bottom" />
                    </div>
                  </div>
                  {/* Nav Start */}
                  <div className="classynav">
                    <ul>
                      <li className="active">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/recipe">Recipes</a>
                      </li>
                      <li>
                        <a href="/">Contact</a>
                      </li>
                      <li>
                        {/* <div className="col-3 text-right"> */}
                          <button
                            className="btn delicious-btn"
                            type="button"
                            onClick={goToAddRecipePage}
                          >
                            Add Recipe
                          </button>
                        {/* </div> */}
                      </li>
                    </ul>
                    {/* Newsletter Form */}
                    {!recipePage && (
                      <div className="" onClick={handleToggleSearch}>
                        <i className="fa fa-search" />
                      </div>
                    )}
                  </div>
                  {/* Nav End */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
