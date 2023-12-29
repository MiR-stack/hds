import React from 'react';
import Label from '../../atoms/Label/Label.js';
import HelperText from '../../atoms/helperText/HelperText.js';
import '@hds/scss/lib/inputHelper.css';

const InputHelper = ({ labels, helperText, children, error = false, disabled = false, styles, }) => {
    return (React.createElement("div", { className: `hds-inputHelper ${disabled ? "hds-inputHelper_disabled" : ""}`, style: { ...styles } },
        labels && React.createElement(Label, { labels: labels }),
        children,
        helperText && React.createElement(HelperText, { text: helperText, error: error })));
};

export { InputHelper as default };
//# sourceMappingURL=inputHelper.js.map
