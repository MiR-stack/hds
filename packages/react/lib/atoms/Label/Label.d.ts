import React from "react";
import fontSizes from "@hds/foundation/lib/fontSizes";
import "@hds/scss/lib/text.css";
interface labelProps {
    labels?: Array<string> | string;
    children?: string;
    size?: keyof typeof fontSizes;
}
declare const Label: React.FC<labelProps>;
export default Label;
