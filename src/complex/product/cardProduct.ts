import { InputGenerated } from "../../utils/inputGeneratedForm";
import { CSSProperties } from "react";
import { IFlexNodeEntry } from "../../flex";

export interface IProductCard {
  target: "product-cards";
  styles?: IStylesProductCard;
  name?: string;
  __type?: "Complex";
  schema?: InputGenerated[];
  props?: IProductCardsProps;
  nodes?: IFlexNodeEntry;
}

export interface IStylesProductCard {
  item?: CSSProperties;
  container?: CSSProperties;
  title?: CSSProperties;
}
export interface IProductCardsProps {
  categories: string;
  row: number;
}