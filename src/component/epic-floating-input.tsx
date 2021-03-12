import React, { useEffect, useState } from "react";
import {
  Animated,
  Platform,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { InputFooter } from "./input-footer";
import type {
  InputType,
  EpicInputTheme,
  EpicFloatingInputOptions,
  IconProps,
} from "./types";
import { shadeColor } from "./utils";

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

export const EpicFloatingInput: React.FC<EpicInputProps> = ({
  type = "muted",
  mode = "light",
  disabled = false,
  inputType = "outline",
  placeholder,
  theme = {
    primary: "#5900ff",
    danger: "#ff0004",
    warning: "#ffd000",
    tertiary: "#00e0e0",
    success: "#2B912F",
    muted: "#929292",
  },
  left,
  right,
  options,
  maxLength,
  helperText,
  style,
  inputStyle,
  onChangeText,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [InputType, setInputType] = useState<InputType>(type);
  const [charLength, setCharLength] = useState<number>(0);

  // ***** Epic Floating Input Animation ***** //

  const DefaultAnimationVal = {
    x: left?.icon ? 40 : 8,
    y: Platform.OS === "android" ? 11 : 16,
  };

  const [animatePlaceholder] = useState(
    new Animated.ValueXY(DefaultAnimationVal)
  );
  const AnimatedText = Animated.createAnimatedComponent(Text);

  const _AnimatePlaceholder = () => {
    setIsFocused(true);
    Animated.timing(animatePlaceholder, {
      toValue: { x: 7, y: Platform.OS === "android" ? -13 : -8 },
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const _ResetAnimation = () => {
    setIsFocused(false);
    Animated.timing(animatePlaceholder, {
      toValue: DefaultAnimationVal,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  // End

  // ***** Epic Floating Input Theme ***** //

  const InputVariants = {
    primary: "primary",
    danger: "danger",
    warning: "warning",
    tertiary: "tertiary",
    success: "success",
    muted: "muted",
  };

  // Variant styles
  const variantStyles = {
    [InputVariants.primary]: {
      color: theme.primary,
      borderColor: theme.primary,
    },
    [InputVariants.danger]: {
      color: theme.danger,
      borderColor: theme.danger,
    },
    [InputVariants.warning]: {
      color: theme.warning,
      borderColor: theme.warning,
    },
    [InputVariants.tertiary]: {
      color: theme.tertiary,
      borderColor: theme.tertiary,
    },
    [InputVariants.success]: {
      color: theme.success,
      borderColor: theme.success,
    },
    [InputVariants.muted]: {
      color: theme.muted,
      borderColor: theme.muted,
    },
  };

  // End

  // ***** Epic Floating Input Theme ***** //

  const Mode = {
    dark: "dark",
    light: "light",
  };

  const ModeStyles = {
    [Mode.light]: {
      color: variantStyles[InputType].color,
      backgroundColor:
        inputType === "solid" ? (isFocused ? "white" : "transparent") : "white",
    },
    [Mode.dark]: {
      color: isFocused ? "white" : variantStyles[InputType].color,
      backgroundColor: isFocused
        ? shadeColor(variantStyles[InputType].color || "#000", 30)
        : "transparent",
    },
  };

  // End

  // ***** Epic Floating Input Styles ***** //

  const Row: StyleProp<ViewStyle> = { flexDirection: "row", flexWrap: "wrap" };

  const InputStyles: StyleProp<ViewStyle> = {
    borderWidth: inputType === "outline" ? 2 : undefined,
    width: "100%",
    borderRadius: 14,
    backgroundColor:
      inputType === "outline"
        ? mode === "light"
          ? "white"
          : "transparent"
        : shadeColor(variantStyles[InputType].color || "#000", 20),
  };
  const LabelStyles: StyleProp<TextStyle> = {
    fontSize: 14,
    color: isFocused
      ? ModeStyles[mode].color
      : InputType === "warning" ||
        InputType === "danger" ||
        InputType === "success"
      ? variantStyles[InputType].color
      : theme.muted,
  };
  const HelperTextStyles: StyleProp<TextStyle> = {
    left: 20,
    top: 5,
    marginBottom: 15,
    fontSize: 13,
    color:
      InputType === "danger" ||
      InputType === "warning" ||
      InputType === "success"
        ? variantStyles[InputType].color
        : theme.muted,
  };
  const CounterStyles: StyleProp<TextStyle> = {
    right: 20,
    top: 5,
    marginBottom: 15,
    fontSize: 13,
    color: theme.muted,
  };

  const InputContainer: StyleProp<ViewStyle> = {
    width:
      left?.icon && right?.icon
        ? "80%"
        : left?.icon || right?.icon
        ? "90%"
        : "100%",
    paddingHorizontal:
      left?.icon && right?.icon
        ? 10
        : left?.icon || right?.icon
        ? 5
        : undefined,
  };

  const PlaceholderContainer: StyleProp<ViewStyle> = {
    ...ModeStyles[mode],
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  };

  const WrapperStyles: StyleProp<ViewStyle> = {
    ...variantStyles[InputType],
    paddingHorizontal:
      left?.icon && right?.icon ? 10 : left?.icon || right?.icon ? 10 : 15,
    marginBottom: helperText ? 0 : 10,
  };

  const MainInput: StyleProp<TextStyle> = {
    height: 50,
    fontSize: 15,
    color: mode === "dark" ? "white" : undefined,
  };

  const IconContainerStyle: StyleProp<ViewStyle> = {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  };

  // End

  useEffect(() => {
    // Check if input is focused and set its value
    setInputType(isFocused ? "primary" : type);
  }, [isFocused]); // Watch Input Behaviour

  return (
    <>
      <View style={[InputStyles, WrapperStyles, inputStyle]}>
        <AnimatedText
          style={[{ position: "absolute" }, animatePlaceholder.getLayout()]}
        >
          <View style={PlaceholderContainer}>
            <Text style={[LabelStyles]}>{placeholder}</Text>
          </View>
        </AnimatedText>
        <TouchableWithoutFeedback
          onBlur={!charLength ? _ResetAnimation : undefined}
        >
          <View style={Row}>
            {typeof left?.icon === "string" ? (
              <View style={IconContainerStyle}>
                <Ionicons
                  name={left.icon}
                  size={right?.size || 20}
                  color={right?.color || variantStyles[InputType].color}
                />
              </View>
            ) : left?.icon && React.isValidElement(left?.icon) ? (
              left.icon
            ) : null}
            <View style={InputContainer}>
              <TextInput
                editable={!disabled}
                style={[{ ...MainInput }, style]}
                selectionColor={variantStyles[InputType].color}
                maxLength={maxLength}
                onChangeText={(e) => {
                  if (typeof onChangeText === "function") onChangeText(e);
                  setCharLength(e.length);
                }}
                onFocus={_AnimatePlaceholder}
                {...rest}
              />
            </View>
            {typeof right?.icon === "string" ? (
              <View style={IconContainerStyle}>
                <TouchableOpacity
                  disabled={disabled}
                  onPress={
                    typeof right.onClick === "function"
                      ? right.onClick
                      : undefined
                  }
                >
                  <Ionicons
                    name={right.icon}
                    size={right.size || 20}
                    color={right.color || variantStyles[InputType].color}
                  />
                </TouchableOpacity>
              </View>
            ) : right?.icon && React.isValidElement(right.icon) ? (
              right.icon
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      </View>
      <InputFooter
        helperText={helperText}
        helperTextStyles={HelperTextStyles}
        counterStyles={CounterStyles}
        options={{
          counter: options?.counter,
          charLength: charLength,
          maxLength: maxLength,
          counterColor: options?.counterColor,
        }}
      />
    </>
  );
};
