import React from "react";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="app-header">
      <nav className="app-header-menu">
        <NavLink to="/news" className="app-header-menu-link">
          Home
        </NavLink>
      </nav>
      <div className="app-header-login">
        <div className="app-header-login-link">
          <NavLink to="/login">Sign in</NavLink>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
