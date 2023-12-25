import React from "react";
import "@hds/scss/lib/button.css";

interface buttonProps {
  title: string;
  variant?: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<buttonProps> = ({
  title,
  children,
  startIcon,
  endIcon,
  onClick,
  variant = "primary",
}) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} title={title}>
      {startIcon} {children} {endIcon}
    </button>
  );
};

export default Button;
