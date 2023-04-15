import { InputGenerated } from "../../utils/inputGeneratedForm";
import { CSSProperties } from "react";

export interface IProductImageProps {}
export interface ProductImageCSS {
  image: CSSProperties;
  container: CSSProperties;
}

export interface IProductImage {
  props: IProductImageProps;
  style?: ProductImageCSS;
  target: "product-image";
  __type: "Complex";
  schema?: InputGenerated[];
  name: string;
}
