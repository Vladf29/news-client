import React from "react";

import "./Login.scss";

import LoginContainer from "../containers/LoginContainer";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h3 className="login-title">Sign in</h3>
        <LoginContainer />
      </div>
    </div>
  );
};

export default Login;
