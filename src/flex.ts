import { CSSProperties } from "react";
import { IImage } from "./image";
import { IParagraph } from "./paragraph";
import { ITitle } from "./title";
import { IInput } from "./form/input";
import { IForm } from "./form/form";
import { ILink } from "./link";
import { ISliderCategories } from "./complex/sliderCategories";
import { IProductCard } from "./complex/product/cardProduct";
import { ITopBar } from "./complex/topBar";
import { IButtonSocial } from "./complex/buttonSocial";
import { IProductName } from "./complex/product/productName";
import { IProductImage } from "./complex/product/IProductImage";
import { IProductDescription } from "./complex/product/IProductDescription";
import { Icon } from "./complex/icon";
import { IElementCustom } from "./custom/elementCustomBasic";




export interface IFlexNodeAttribute {
    target: "flex";
    level?: number;
    nodes: IFlexNodeEntry;
    node?: number;
    name?: string;
    style?: CSSProperties;
    __type?: "Flex";
}


export type IFlexNodeEntry = (
    | ITitle
    | IParagraph
    | IFlexNodeAttribute
    | IImage
    | IInput
    | IForm
    | ILink
    //? Componentes "Complejos"
    | ISliderCategories
    //? Product
    | IProductCard
    | IProductName
    | IProductImage
    | IProductDescription
    | IButtonSocial
    | ITopBar
    | IElementCustom
    | Icon
    | string
)[];
export type IFlexBlockEntry = (
    | ITitle
    | IParagraph
    | IFlexNodeAttribute
    | IImage
    | IInput
    | IForm
    | ILink
    //? Componentes "Complejos"
    | ISliderCategories
    //? Product
    | IProductCard
    | IProductName
    | IProductImage
    | IProductDescription
    | IButtonSocial
    | ITopBar
    | IElementCustom
    | Icon
)[];
