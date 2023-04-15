import { IFlexNodeEntry } from "./flex";

export interface IPage {
    nodes: IFlexNodeEntry;
    name: string;
    path: string;
    target: 'page';
    __type: 'Page';

}