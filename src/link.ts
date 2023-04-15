import { CSSProperties } from "react";

export interface ILink {
    name?: string;
    color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
    href: string;
    text: string;
    target: "link";
    style?: CSSProperties;
    params?: string[];
    variant?: "outlined" | "link" | "contained" | "text";
    __type?: "Link";
}