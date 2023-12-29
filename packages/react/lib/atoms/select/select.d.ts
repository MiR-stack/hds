import React from "react";
import "@hds/scss/lib/input.css";
import "@hds/scss/lib/appearance.css";
interface selectProps {
    variant?: string;
    children: React.ReactNode;
    id: string;
    name: string;
    value?: string;
    label?: string;
}
declare const Select: React.FC<selectProps>;
export default Select;
