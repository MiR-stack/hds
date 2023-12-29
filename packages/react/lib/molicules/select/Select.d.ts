import React from "react";
import "@hds/scss/lib/select.css";
import "@hds/scss/lib/appearance.css";
import "@hds/scss/lib/input.css";
import { variants } from "./variants";
interface optionProps {
    label: string;
    value: string;
}
interface selectProps {
    labels?: string | Array<string>;
    helperText?: string;
    optionLabel?: string;
    options?: Array<optionProps>;
    disabled?: boolean;
    error?: boolean;
    variant?: keyof typeof variants;
    optionClick: (options: optionProps, index: number) => void;
}
declare const Select: React.FC<selectProps>;
export default Select;
