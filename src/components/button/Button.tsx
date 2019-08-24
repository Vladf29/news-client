import React from "react";

import "./Button.scss";

export interface IButtonProps {
  title: string;
  onClick: (event: React.MouseEvent) => void;
  success?: boolean;
  danger?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  title,
  onClick,
  success,
  danger
}) => {
  const classes = ["app-button"];
  if (success) {
    classes.push("app-button--success");
  } else if (danger) {
    classes.push("app-button--danger");
  }
  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
