import { InputGenerated } from "../utils/inputGeneratedForm";
import { CSSProperties } from "react";

export interface ICategories {
  id: number;
  name: string;
  slug: string;
  status: boolean;
}

export type stylesCategories = {
  container?: CSSProperties;
  item?: CSSProperties;
  titleItem?: CSSProperties;
  titleContent?: CSSProperties;
  linkItem?: CSSProperties;
};

export interface ISliderCategories{
  style?: stylesCategories;
  categories?: ICategories[];
  name?: string;
  target: "categories";
  schema?: InputGenerated[];
  __type?: "Complex";
  props?: {
    title?: string;
  };
}
