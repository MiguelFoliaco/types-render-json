type TypeValue =
  | "number"
  | "date"
  | "text"
  | "email"
  | "phone"
  | "color"
  | "url"
  | "json";

export interface InputGenerated {
  typeValue: TypeValue;
  value: string | number | Date | undefined;
  name: string;
  options?: { value: string; name: string }[];
  textHelp?: string;
  placeHolder?: string;
  disabled?: boolean;
  multiline?: {
    active?: boolean;
    line?: number;
  };
}