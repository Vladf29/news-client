import React from "react";

import "./FormGroup.scss";

const FormGroup: React.FC = ({ children }) => {
  return <div className="app-form-group">{children}</div>;
};

export default FormGroup;
