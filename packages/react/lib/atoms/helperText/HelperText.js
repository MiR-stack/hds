import React from 'react';
import '@hds/scss/lib/text.css';

const HelperText = ({ text, children, error = false, }) => {
    return (React.createElement("p", { className: `hds-text-helper ${error ? "hds-text-error" : ""}` },
        children ? children : text,
        " "));
};

export { HelperText as default };
//# sourceMappingURL=HelperText.js.map
