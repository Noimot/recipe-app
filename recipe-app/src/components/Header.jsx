import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = ({
  toggleSearch,
  handleToggleSearch,
  recipePage,
  title,
  setTitle,
  setQueryTitle,
}) => {
  const navigate = useNavigate();
  const goToAddRecipePage = () => {
    navigate("/recipe/add-recipe");
  };
  const handleSearch = () => {
    // handleToggleSearch();
    setQueryTitle(title);
  };
  const handleReset = () => {
    handleToggleSearch();
    setQueryTitle("");
  };
  const [active, setActive] = useState("recipe");
  const handleActive = (path) => {
    setActive(path);
  };
  const token = localStorage.getItem("token");
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
                  <img src="/img/logoooo.png" alt="" />
                </a>

                <div className="classy-menu">
                  {/* Nav Start */}
                  <div className="classynav">
                    <ul className="d-flex align-items-center">
                      <div className="mr-2">
                        <NavLink
                          to="/"
                          style={({ isActive }) => {
                            isActive ? setActive("home") : null;
                            return {
                              backgroundColor: isActive ? "#40ba37" : "",
                              fontSize: active ? "16px" : "",
                              fontSize: isActive ? "16px" : "",
                              fontWeight: 600,
                              color: isActive ? "#ffffff" : "",
                              textTransform: "uppercase",
                              padding: "12px 18px 11px",
                              borderBottom: isActive ? "3px solid #1c8314" : "",
                              lineHeight: 1,
                            };
                          }}
                        >
                          <div>
                            <li>Home</li>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/recipe"
                          style={({ isActive }) => {
                            isActive ? setActive("recipe") : null;
                            return {
                              backgroundColor: isActive ? "#40ba37" : "",
                              fontSize: active ? "16px" : "",
                              fontSize: isActive ? "16px" : "",
                              fontWeight: 600,
                              color: isActive ? "#ffffff" : "",
                              textTransform: "uppercase",
                              padding: "12px 18px 11px",
                              borderBottom: isActive ? "3px solid #1c8314" : "",
                              lineHeight: 1,
                            };
                          }}
                        >
                          <div>
                            <li>Recipe</li>
                          </div>
                        </NavLink>
                      </div>

                      <div>
                        <li
                          style={{
                            fontWeight: 600,
                            textTransform: "uppercase",
                          }}
                        >
                          <Link to="/login" className="">
                            Login
                          </Link>
                        </li>
                        <li
                          className="px-2"
                          style={{
                            fontWeight: 600,
                            textTransform: "uppercase",
                          }}
                        >
                          <Link to="/signup" className="">
                            Signup
                          </Link>
                        </li>
                        {token !== 'undefined' && token && (
                          <li>
                            <button
                              className="btn delicious-btn"
                              type="button"
                              onClick={goToAddRecipePage}
                            >
                              Add Recipe
                            </button>
                          </li>
                        )}
                      </div>
                    </ul>
                    {/* Newsletter Form */}
                    {!recipePage && (
                      <div className="" onClick={handleToggleSearch}>
                        <i className="fa fa-search" />
                      </div>
                    )}
                  </div>
                  {/* <section className="mt-10">
              <nav>
                <ul className="flex gap-1 md:gap-1 flex-col">
                  <NavLink
                    to="/"
                    style={({ isActive }) => {
                      isActive ? setActive("home") : null;
                      return {
                        backgroundColor: isActive ? "#1c8314" : "",
                        borderColor: isActive ? "#40ba37" : "",
                        // borderRadius: "10px",
                        // fontWeight: isActive ? 800 : 100,
                        fontSize: active ? "16px" : "",
                        fontWeight: 600,
                        color: "#ffffff",
                        // backgroundColor: "#1c8314",
                        // borderColor: "#40ba37"
                      };
                    }}
                  >
                    <div>
                     
                      <li
                      >
                        Home
                      </li>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/recipe"
                    style={({ isActive }) => {
                      isActive ? setActive("recipe") : null;
                      return {
                        backgroundColor: isActive ? "#1c8314" : "",
                        borderColor: isActive ? "#40ba37" : "",

                        // color: isActive ? "#7152F3" : "",
                        // borderRadius: "10px",
                        // fontWeight: isActive ? 800 : 100,
                        fontSize: active ? "16px" : "",
                        fontWeight: 600,
                        color: "#ffffff",
                        // backgroundColor: "#1c8314",
                        // borderColor: "#40ba37"
                      };
                    }}
                  >
                    <div>
                     
                      <li
                      >
                        Recipe
                      </li>
                    </div>
                  </NavLink>
                  </ul></nav></section> */}
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
