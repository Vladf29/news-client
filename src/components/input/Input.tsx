import React from "react";

import "./Input.scss";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInputProps> = props => {
  return <input {...props} className="app-input" />;
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  name: "",
  value: "",
  onChange: () => {}
};

export default Input;
