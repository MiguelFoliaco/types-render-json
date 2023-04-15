import { CSSProperties } from "react";
import { InputGenerated } from "../utils/inputGeneratedForm";

export interface ITopBar {
  icon: {
    type: "string" | "url";
    value: string;
  };
  title?: string;
  idMenu: number;
}
export interface CSSTypesTopBar {
  link?: {
    container?: CSSProperties;
    text?: CSSProperties;
  };
  icon?: {
    container?: CSSProperties;
    img?: CSSProperties;
  };
  title?: {
    container?: CSSProperties;
    text?: CSSProperties;
  };
  login?: {
    container?: CSSProperties;
    icon?: CSSProperties;
  };
  container?: CSSProperties;
}

export interface ITopBar{
  style?: CSSTypesTopBar;
  props?: ITopBar;
  target: "top-bar";
  name?: string;
  __type?: "Complex";
  schema?: InputGenerated[];
}
