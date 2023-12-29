import React from "react";
import Label from "../../atoms/Label";
import HelperText from "../../atoms/helperText";
import "@hds/scss/lib/inputHelper.css";

interface inputHelperProps {
  labels?: string | string[];
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  styles?: object;
  children: React.ReactNode;
}

const InputHelper: React.FC<inputHelperProps> = ({
  labels,
  helperText,
  children,
  error = false,
  disabled = false,
  styles,
}) => {
  return (
    <div
      className={`hds-inputHelper ${
        disabled ? "hds-inputHelper_disabled" : ""
      }`}
      style={{ ...styles }}
    >
      {labels && <Label labels={labels} />}
      {children}
      {helperText && <HelperText text={helperText} error={error} />}
    </div>
  );
};

export default InputHelper;
