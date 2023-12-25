import React from "react";
import "@hds/scss/lib/button.css";
interface buttonProps {
    title: string;
    variant?: string;
    children: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick: () => void;
}
declare const Button: React.FC<buttonProps>;
export default Button;
