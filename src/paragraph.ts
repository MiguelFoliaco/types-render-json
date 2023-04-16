import { CSSProperties } from "react";

export interface IParagraph {
  name?: string;
  target: "p";
  level?: number;
  typetext?: "text";
  style?: CSSProperties;
  text: string;
  markdown?: boolean;
  __type?: "Paragraph";
}
