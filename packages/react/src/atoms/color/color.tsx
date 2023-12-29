import React from "react";
import { Spacing } from "@hds/foundation";
import "@hds/scss/lib/utilities.css";

interface colorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FC<colorProps> = ({
  hexCode,
  height = "sm",
  width = "sm",
}) => {
  const className = `hds-width-${width} hds-height-${height} `;

  return <div className={className} style={{ background: hexCode }}></div>;
};

export default Color;
