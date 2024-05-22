import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, toggleSearch, handleToggleSearch, recipePage }) => {
  return (
    <div>
      <Header
        toggleSearch={toggleSearch}
        handleToggleSearch={handleToggleSearch}
        recipePage={recipePage}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
