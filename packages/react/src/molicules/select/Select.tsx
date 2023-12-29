import React, { useState } from "react";
import "@hds/scss/lib/select.css";
import "@hds/scss/lib/appearance.css";
import "@hds/scss/lib/input.css";
import InputHelper from "../InputHelper";
import { variants } from "./variants";

interface optionProps {
  label: string;
  value: string;
}

interface selectProps {
  labels?: string | Array<string>;
  helperText?: string;
  optionLabel?: string;
  options?: Array<optionProps>;
  disabled?: boolean;
  error?: boolean;
  variant?: keyof typeof variants;
  optionClick: (options: optionProps, index: number) => void;
}

const Select: React.FC<selectProps> = ({
  labels,
  helperText,
  optionLabel = "choose option",
  options = [],
  disabled = false,
  error = false,
  variant,
  optionClick,
}) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const [active, setActive] = useState<optionProps>({
    value: "",
    label: optionLabel,
  });

  const handleOptionClick = (option: optionProps, index: number) => {
    optionClick(option, index);
    setActive(option);
    setIsOpen(false);
  };

  return (
    <InputHelper
      labels={labels}
      helperText={helperText}
      error={error}
      disabled={disabled}
    >
      <div className={`hds-select  `}>
        <button
          className={`hds-select-label${
            variant ? `_${variant}` : ""
          } appearance ${isOpen ? "" : "appr-icon-toggle-up"} ${
            disabled ? "hds-input_disabled" : ""
          } ${error ? "hds-input_error" : ""} `}
          onClick={handleToggle}
        >
          <span>{active.label}</span>
        </button>
        {isOpen && (
          <ul className={`hds-select-options text-muted`}>
            {options.map((option, index) => (
              <li
                key={index}
                className={`hds-select-option ${
                  active.value === option.value
                    ? "hds-select-option_active appearance appr-icon-success"
                    : ""
                }`}
                value={option.value}
                onClick={() => handleOptionClick(option, index)}
              >
                {option.label}{" "}
              </li>
            ))}
          </ul>
        )}
      </div>
    </InputHelper>
  );
};

export default Select;
