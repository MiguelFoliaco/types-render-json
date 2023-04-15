import { CSSProperties } from "react";

export interface IInput {
  label?: string;
  target: "input";
  nameInput: string;
  typeInput?: TypeInput;
  name?: string;
  styleInput?: CSSProperties;
  styleControl?: CSSProperties;
  styleLabel?: CSSProperties;
  __type?: "Input";
}
export type TypeInput =
  | "text"
  | "textarea"
  | "phone"
  | "number"
  | "email"
  | "password";
