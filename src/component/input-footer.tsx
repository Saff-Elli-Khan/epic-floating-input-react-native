import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

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

export const InputFooter: React.FC<InputFooterProps> = ({
  styles,
  helperText,
  helperTextStyles,
  counterStyles,
  options,
  color,
}) => {
  return (
    <>
      <View style={[{ flexDirection: "row", flexWrap: "wrap" }, styles]}>
        <View
          style={{
            width: "70%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {typeof helperText === "string" ? (
            <Text style={[helperTextStyles]}>{helperText}</Text>
          ) : helperText && React.isValidElement(helperText) ? (
            helperText
          ) : null}
        </View>
        <View
          style={{
            width: "30%",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          {options?.counter ? (
            <Text style={[counterStyles]}>
              <Text
                style={{
                  color: options.counterColor || color,
                }}
              >
                {options.charLength}
              </Text>
              {options.maxLength ? " / " + options.maxLength : null}
            </Text>
          ) : null}
        </View>
      </View>
    </>
  );
};
