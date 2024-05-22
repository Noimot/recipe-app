import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, toggleSearch, handleToggleSearch, recipePage, title, setTitle, setQueryTitle }) => {
  return (
    <div>
      <Header
        toggleSearch={toggleSearch}
        handleToggleSearch={handleToggleSearch}
        recipePage={recipePage}
        title={title}
        setTitle={setTitle}
        setQueryTitle={setQueryTitle}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
