import React from "react";
import "@hds/scss/lib/inputHelper.css";
interface inputHelperProps {
    labels?: string | string[];
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    styles?: object;
    children: React.ReactNode;
}
declare const InputHelper: React.FC<inputHelperProps>;
export default InputHelper;
