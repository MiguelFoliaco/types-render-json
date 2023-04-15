import { InputGenerated } from "../utils/inputGeneratedForm";
import { CSSProperties } from "react";
export interface IIconProps {
  //lib: LibIcons;
  nameIcon: string;
  color?: string;
  size: string;
  link?: {
    href: string;
    text?: string;
  };
}

export interface IconCSS {
  icon?: CSSProperties;
  container?: CSSProperties;
  link?: CSSProperties;
}

export interface Icon {
  target: "icon";
  __type: "Complex";
  name: string;
  props: IIconProps;
  style?: IconCSS;
  schema?: InputGenerated[];
}

export type LibIcons =
  | "ci"
  | "fa"
  | "io"
  | "io5"
  | "md"
  | "ti"
  | "go"
  | "fi"
  | "gi"
  | "wi"
  | "di"
  | "ai"
  | "bs"
  | "ri"
  | "fc"
  | "gr"
  | "hi"
  | "hi2"
  | "si"
  | "sl"
  | "im"
  | "bi"
  | "cg"
  | "vsc"
  | "tb"
  | "tfi"
  | "rx"
  | "materia-ui";
