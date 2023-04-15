import { IButtonSocial } from "./complex/buttonSocial";
import { Icon } from "./complex/icon";
import { IProductDescription } from "./complex/product/IProductDescription";
import { IProductImage } from "./complex/product/IProductImage";
import { IProductCard } from "./complex/product/cardProduct";
import { IProductName } from "./complex/product/productName";
import { ISliderCategories } from "./complex/sliderCategories";
import { ITopBar } from "./complex/topBar";
import { IElementCustom } from "./custom/elementCustomBasic";
import { IFlexNodeAttribute } from "./flex";
import { IForm } from "./form/form";
import { IInput } from "./form/input";
import { IImage } from "./image";
import { ILink } from "./link";
import { IPage } from "./page";
import { IParagraph } from "./paragraph";
import { ThemeOptions } from "./theme/theme";
import { ITitle } from "./title";

export interface IRootJSONEntry {
  root: IJSONEntry;
}
export interface IJSONEntry {
  preview?: string;
  version: string;
  name: string;
  variables: string[];
  types: ("number" | "text" | "date" | "boolean" | "url")[] | never[];
  contents: string[];
   //TODO El objeto ThemeOption es practicamente un 'copy and paste' del objjeto ThemeOption de material ui, asi que puedes customizar los colores y fuentes del tema siguiendo la propia documentacion de  Materia UI: https://mui.com/material-ui/customization/theming
  theme: ThemeOptions;
  blocks?: IBlocksEntry;
  nodes: INodesEntry;
}
/*
 * Element
 */
// export type IElement =
//   | Page
//   | Title
//   | Paragraph
//   | Flex
//   | Image
//   | Header
//   | Input
//   | Form
//   | Link
//   //? Componentes "Complejos"
//   | SliderCategories
//   | ButtonSocials
//   | TopBar
//   | Icon
//   //? Product
//   | ProductCards
//   | ProductName
//   | ProductImage
//   | ProductDescription
//   //? Custom
//   | ElemenetCustomExternalClass;

//export type INodes = Array<IElement>;
//export type INodeEntries = IElement[];
/*
 * Elemente Entry
 */
export type IElementAttributes =
  | IPage
  | ITitle
  | IParagraph
  | IFlexNodeAttribute
  | IImage
  | IInput
  | IForm
  | ILink
  //? Componentes "Complejos"
  | ISliderCategories
  | Icon
  | IButtonSocial
  | ITopBar
  //? Product
  | IProductCard
  | IProductName
  | IProductImage
  | IProductDescription
  //? Custom
  | IElementCustom
  | string;
export type IElementAttributesBlock =
  | IPage
  | ITitle
  | IParagraph
  | IFlexNodeAttribute
  | IImage
  | IInput
  | IForm
  | ILink
  //? Componentes "Complejos"
  | ISliderCategories
  | Icon
  | IButtonSocial
  | ITopBar
  //? Product
  | IProductCard
  | IProductName
  | IProductImage
  | IProductDescription
  //? Custom
  | IElementCustom;
export type INodesEntry = IElementAttributes[];
export type IBlocksEntry = IElementAttributesBlock[];
