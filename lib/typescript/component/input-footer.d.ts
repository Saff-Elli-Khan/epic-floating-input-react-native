import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
interface InputFooterProps {
    styles?: StyleProp<ViewStyle>;
    helperText?: string | React.ReactNode;
    helperTextStyles: StyleProp<TextStyle>;
    options?: {
        counter?: boolean;
        charLength?: number;
        maxLength?: number;
        counterColor?: string;
    };
    counterStyles: StyleProp<TextStyle>;
    color?: string;
}
export declare const InputFooter: React.FC<InputFooterProps>;
export {};
