import React from 'react';
import '@hds/scss/lib/utilities.css';

const Color = ({ hexCode, height = "sm", width = "sm", }) => {
    const className = `hds-width-${width} hds-height-${height} `;
    return React.createElement("div", { className: className, style: { background: hexCode } });
};

export { Color as default };
//# sourceMappingURL=color.js.map
