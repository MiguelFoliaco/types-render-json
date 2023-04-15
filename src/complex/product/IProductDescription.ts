import { InputGenerated } from "../../utils/inputGeneratedForm";
import { CSSProperties } from "react";

export interface IProductDescriptionProps {
  link?: boolean;
  len?: number;
  endText?: string;
}

export interface ProductDescriptionCSS {
  text: CSSProperties;
  container: CSSProperties;
}

export interface IProductDescription {
  name: string;
  props: IProductDescriptionProps;
  style?: ProductDescriptionCSS;
  target: "product-description";
  schema?: InputGenerated[];
  __type: "Complex";
}
