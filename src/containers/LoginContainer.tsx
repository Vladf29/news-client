import React, { useState } from "react";

import useGoogleLoginBtn from "../hooks/useGoogleLoginBtn";

import FormGroup from "../components/formGroup/FormGroup";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const _onSuccessGoogle = (auth2: any) => {
    // console.log(auth2);
  };
  const _onFailureGoogle = (err: any) => {
    console.error(err);
    alert("Something went wrong when tried signing through Google.");
  };

  const refGoogleBtn = useGoogleLoginBtn(_onSuccessGoogle, _onFailureGoogle);

  return (
    <form className="login-form" onSubmit={_onSubmit}>
      <FormGroup>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormGroup>

      <div className="login-actions">
        <FormGroup>
          <Button onClick={() => {}} title="Sign in" success />
        </FormGroup>
        <FormGroup>
          <div ref={refGoogleBtn}>{/*  */}</div>
        </FormGroup>
      </div>
    </form>
  );
};

export default LoginContainer;
