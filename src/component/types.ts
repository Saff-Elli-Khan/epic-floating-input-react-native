export interface EpicInputTheme {
  primary?: string;
  danger?: string;
  success?: string;
  tertiary?: string;
  muted?: string;
  warning?: string;
}

export interface IconProps {
  icon: string | React.ReactNode;
  color?: string;
  size?: number;
  onClick?: () => void;
}

export interface EpicFloatingInputOptions {
  placeholderTextColor?: string;
  placeholderFontFamily?: string;
  counter?: boolean;
  counterColor?: string;
}

export type InputType =
  | "primary"
  | "danger"
  | "success"
  | "tertiary"
  | "muted"
  | "warning";
