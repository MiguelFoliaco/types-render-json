import { InputGenerated } from "../../utils/inputGeneratedForm";
import { CSSProperties } from "react";

export interface IProductNameProps {
  link: boolean;
}

export interface ProductNameCSS {
  text?: CSSProperties;
  container?: CSSProperties;
}

export interface IProductName {
  name: string;
  props: IProductNameProps;
  style?: ProductNameCSS;
  target: "product-name";
  schema?: InputGenerated[];
  __type: "Complex";
}
