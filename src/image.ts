import { CSSProperties } from "react";

export interface IImage {
  name?: string;
  target: "img";
  typeValue?: string;
  level?: number;
  url: string;
  alt: string;
  __type?: "Image";
  style?: CSSProperties;
}
