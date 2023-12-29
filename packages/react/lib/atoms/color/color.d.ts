import React from "react";
import { Spacing } from "@hds/foundation";
import "@hds/scss/lib/utilities.css";
interface colorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<colorProps>;
export default Color;
