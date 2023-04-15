import { CSSProperties } from "react";
import { IFlexNodeEntry } from "../flex";

export interface IForm {
  event?: "onChange" | "onSubmit";
  target: "form";
  nodes: IFlexNodeEntry;
  keys: TypeEntryForm[];
  styles?: CSSProperties;
  name: string;
  logic: ILogicModule[];
  __type?: "Form";
}

export type TypeEntryForm = {
  name: string;
  type: string;
  rule?: "email" | "phone" | "files";
};

export type ILogicModule = {
  logic: "useForm" | "useFetch";
  name: string;
  return: any;
  params: any[];
};
