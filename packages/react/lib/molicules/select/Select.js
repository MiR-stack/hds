import React, { useState } from 'react';
import '@hds/scss/lib/select.css';
import '@hds/scss/lib/appearance.css';
import '@hds/scss/lib/input.css';
import InputHelper from '../InputHelper/inputHelper.js';

const Select = ({ labels, helperText, optionLabel = "choose option", options = [], disabled = false, error = false, variant, optionClick, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };
    const [active, setActive] = useState({
        value: "",
        label: optionLabel,
    });
    const handleOptionClick = (option, index) => {
        optionClick(option, index);
        setActive(option);
        setIsOpen(false);
    };
    return (React.createElement(InputHelper, { labels: labels, helperText: helperText, error: error, disabled: disabled },
        React.createElement("div", { className: `hds-select  ` },
            React.createElement("button", { className: `hds-select-label${variant ? `_${variant}` : ""} appearance ${isOpen ? "" : "appr-icon-toggle-up"} ${disabled ? "hds-input_disabled" : ""} ${error ? "hds-input_error" : ""} `, onClick: handleToggle },
                React.createElement("span", null, active.label)),
            isOpen && (React.createElement("ul", { className: `hds-select-options text-muted` }, options.map((option, index) => (React.createElement("li", { key: index, className: `hds-select-option ${active.value === option.value
                    ? "hds-select-option_active appearance appr-icon-success"
                    : ""}`, value: option.value, onClick: () => handleOptionClick(option, index) },
                option.label,
                " "))))))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
