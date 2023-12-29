import React from "react";
import "@hds/scss/lib/text.css";

interface helperTextProps {
  text?: string;
  children?: string;
  error?: boolean;
}

const HelperText: React.FC<helperTextProps> = ({
  text,
  children,
  error = false,
}) => {
  return (
    <p className={`hds-text-helper ${error ? "hds-text-error" : ""}`}>
      {children ? children : text}{" "}
    </p>
  );
};

export default HelperText;
