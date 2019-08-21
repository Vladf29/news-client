import React from "react";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="header">
      <nav className="header-menu">
        <NavLink to="/news" className="header-menu-link">
          Home
        </NavLink>
      </nav>
      <div className="header-login">
        <div className="header-login-link">
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
