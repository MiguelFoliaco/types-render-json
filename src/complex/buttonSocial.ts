import { InputGenerated } from "../utils/inputGeneratedForm";
import { CSSProperties } from "react";

export interface IButtonSocial {
  styles: StylesButtonSocial;
  name?: string;
  target: "button-social";
  red: "facebook" | "whatsapp" | "instagram";
  link: string;
  msg: string;
  __type?: "Complex";
  schema?: InputGenerated[];
  props?: {};
}

export type StylesButtonSocial = {
  icon?: CSSProperties;
  button?: CSSProperties;
  container?: CSSProperties;
};
