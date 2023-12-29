import React from "react";
import "@hds/scss/lib/text.css";
interface helperTextProps {
    text?: string;
    children?: string;
    error?: boolean;
}
declare const HelperText: React.FC<helperTextProps>;
export default HelperText;
