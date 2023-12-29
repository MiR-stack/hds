import React from "react";
import fontSizes from "@hds/foundation/lib/fontSizes";
import "@hds/scss/lib/text.css";

interface labelProps {
  labels?: Array<string> | string;
  children?: string;
  size?: keyof typeof fontSizes;
}

const Label: React.FC<labelProps> = ({ labels, children, size = "sm" }) => {
  if (Array.isArray(labels)) {
    return (
      <div className="hds-text-label_multiple">
        {labels.map((label, index) => (
          <Label key={index} labels={label} size={size} />
        ))}
      </div>
    );
  }

  return (
    <p className={` hds-fs-${size} hds-text-label `}>
      {labels} {children}{" "}
    </p>
  );
};

export default Label;
