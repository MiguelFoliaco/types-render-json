import { CSSProperties } from "react";

export interface ITitle {
    name?: string;
    typetext?: "text";
    target: IMultiTargetTitle;
    text: string;
    style?: CSSProperties;
    //logic?: ILogicModule;
    typeValue?: "text";
    __type?: "Title";
}

export type IMultiTargetTitle = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";