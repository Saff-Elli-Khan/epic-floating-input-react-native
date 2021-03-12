import React from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import type { InputType, EpicInputTheme, EpicFloatingInputOptions, IconProps } from "./types";
interface EpicInputProps extends TextInputProps {
    type?: InputType;
    inputType?: "outline" | "solid";
    mode?: "dark" | "light";
    theme?: EpicInputTheme;
    placeholder: string;
    left?: IconProps;
    right?: IconProps;
    options?: EpicFloatingInputOptions;
    maxLength?: number;
    helperText?: string | React.ReactNode;
    style?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    onChangeText?: (text: string) => void;
}
export declare const EpicFloatingInput: React.FC<EpicInputProps>;
export {};
