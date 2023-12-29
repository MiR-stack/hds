import React from 'react';
import '@hds/scss/lib/text.css';

const Label = ({ labels, children, size = "sm" }) => {
    if (Array.isArray(labels)) {
        return (React.createElement("div", { className: "hds-text-label_multiple" }, labels.map((label, index) => (React.createElement(Label, { key: index, labels: label, size: size })))));
    }
    return (React.createElement("p", { className: ` hds-fs-${size} hds-text-label ` },
        labels,
        " ",
        children,
        " "));
};

export { Label as default };
//# sourceMappingURL=Label.js.map
