import React from 'react';
import '@hds/scss/lib/button.css';

const Button = ({ title, children, startIcon, endIcon, onClick, variant = "primary", }) => {
    return (React.createElement("button", { className: `btn btn-${variant}`, onClick: onClick, title: title },
        startIcon,
        " ",
        children,
        " ",
        endIcon));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
