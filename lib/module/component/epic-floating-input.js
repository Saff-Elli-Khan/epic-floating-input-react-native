function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useState } from "react";
import { Animated, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { InputFooter } from "./input-footer";
import { shadeColor } from "./utils";
export const EpicFloatingInput = ({
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
    muted: "#929292"
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
  const [InputType, setInputType] = useState(type);
  const [charLength, setCharLength] = useState(0); // ***** Epic Floating Input Animation ***** //

  const DefaultAnimationVal = {
    x: left !== null && left !== void 0 && left.icon ? 40 : 8,
    y: Platform.OS === "android" ? 11 : 16
  };
  const [animatePlaceholder] = useState(new Animated.ValueXY(DefaultAnimationVal));
  const AnimatedText = Animated.createAnimatedComponent(Text);

  const _AnimatePlaceholder = () => {
    setIsFocused(true);
    Animated.timing(animatePlaceholder, {
      toValue: {
        x: 7,
        y: Platform.OS === "android" ? -13 : -8
      },
      duration: 200,
      useNativeDriver: false
    }).start();
  };

  const _ResetAnimation = () => {
    setIsFocused(false);
    Animated.timing(animatePlaceholder, {
      toValue: DefaultAnimationVal,
      duration: 200,
      useNativeDriver: false
    }).start();
  }; // End
  // ***** Epic Floating Input Theme ***** //


  const InputVariants = {
    primary: "primary",
    danger: "danger",
    warning: "warning",
    tertiary: "tertiary",
    success: "success",
    muted: "muted"
  }; // Variant styles

  const variantStyles = {
    [InputVariants.primary]: {
      color: theme.primary,
      borderColor: theme.primary
    },
    [InputVariants.danger]: {
      color: theme.danger,
      borderColor: theme.danger
    },
    [InputVariants.warning]: {
      color: theme.warning,
      borderColor: theme.warning
    },
    [InputVariants.tertiary]: {
      color: theme.tertiary,
      borderColor: theme.tertiary
    },
    [InputVariants.success]: {
      color: theme.success,
      borderColor: theme.success
    },
    [InputVariants.muted]: {
      color: theme.muted,
      borderColor: theme.muted
    }
  }; // End
  // ***** Epic Floating Input Theme ***** //

  const Mode = {
    dark: "dark",
    light: "light"
  };
  const ModeStyles = {
    [Mode.light]: {
      color: variantStyles[InputType].color,
      backgroundColor: inputType === "solid" ? isFocused ? "white" : "transparent" : "white"
    },
    [Mode.dark]: {
      color: isFocused ? "white" : variantStyles[InputType].color,
      backgroundColor: isFocused ? shadeColor(variantStyles[InputType].color || "#000", 30) : "transparent"
    }
  }; // End
  // ***** Epic Floating Input Styles ***** //

  const Row = {
    flexDirection: "row",
    flexWrap: "wrap"
  };
  const InputStyles = {
    borderWidth: inputType === "outline" ? 2 : undefined,
    width: "100%",
    borderRadius: 14,
    backgroundColor: inputType === "outline" ? mode === "light" ? "white" : "transparent" : shadeColor(variantStyles[InputType].color || "#000", 20)
  };
  const LabelStyles = {
    fontSize: 14,
    color: isFocused ? ModeStyles[mode].color : InputType === "warning" || InputType === "danger" || InputType === "success" ? variantStyles[InputType].color : theme.muted
  };
  const HelperTextStyles = {
    left: 20,
    top: 5,
    marginBottom: 15,
    fontSize: 13,
    color: InputType === "danger" || InputType === "warning" || InputType === "success" ? variantStyles[InputType].color : theme.muted
  };
  const CounterStyles = {
    right: 20,
    top: 5,
    marginBottom: 15,
    fontSize: 13,
    color: theme.muted
  };
  const InputContainer = {
    width: left !== null && left !== void 0 && left.icon && right !== null && right !== void 0 && right.icon ? "80%" : left !== null && left !== void 0 && left.icon || right !== null && right !== void 0 && right.icon ? "90%" : "100%",
    paddingHorizontal: left !== null && left !== void 0 && left.icon && right !== null && right !== void 0 && right.icon ? 10 : left !== null && left !== void 0 && left.icon || right !== null && right !== void 0 && right.icon ? 5 : undefined
  };
  const PlaceholderContainer = { ...ModeStyles[mode],
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20
  };
  const WrapperStyles = { ...variantStyles[InputType],
    paddingHorizontal: left !== null && left !== void 0 && left.icon && right !== null && right !== void 0 && right.icon ? 10 : left !== null && left !== void 0 && left.icon || right !== null && right !== void 0 && right.icon ? 10 : 15,
    marginBottom: helperText ? 0 : 10
  };
  const MainInput = {
    height: 50,
    fontSize: 15,
    color: mode === "dark" ? "white" : undefined
  };
  const IconContainerStyle = {
    width: "10%",
    justifyContent: "center",
    alignItems: "center"
  }; // End

  useEffect(() => {
    // Check if input is focused and set its value
    setInputType(isFocused ? "primary" : type);
  }, [isFocused]); // Watch Input Behaviour

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
    style: [InputStyles, WrapperStyles, inputStyle]
  }, /*#__PURE__*/React.createElement(AnimatedText, {
    style: [{
      position: "absolute"
    }, animatePlaceholder.getLayout()]
  }, /*#__PURE__*/React.createElement(View, {
    style: PlaceholderContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [LabelStyles]
  }, placeholder))), /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onBlur: !charLength ? _ResetAnimation : undefined
  }, /*#__PURE__*/React.createElement(View, {
    style: Row
  }, typeof (left === null || left === void 0 ? void 0 : left.icon) === "string" ? /*#__PURE__*/React.createElement(View, {
    style: IconContainerStyle
  }, /*#__PURE__*/React.createElement(Ionicons, {
    name: left.icon,
    size: (right === null || right === void 0 ? void 0 : right.size) || 20,
    color: (right === null || right === void 0 ? void 0 : right.color) || variantStyles[InputType].color
  })) : left !== null && left !== void 0 && left.icon && /*#__PURE__*/React.isValidElement(left === null || left === void 0 ? void 0 : left.icon) ? left.icon : null, /*#__PURE__*/React.createElement(View, {
    style: InputContainer
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    editable: !disabled,
    style: [{ ...MainInput
    }, style],
    selectionColor: variantStyles[InputType].color,
    maxLength: maxLength,
    onChangeText: e => {
      if (typeof onChangeText === "function") onChangeText(e);
      setCharLength(e.length);
    },
    onFocus: _AnimatePlaceholder
  }, rest))), typeof (right === null || right === void 0 ? void 0 : right.icon) === "string" ? /*#__PURE__*/React.createElement(View, {
    style: IconContainerStyle
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    disabled: disabled,
    onPress: typeof right.onClick === "function" ? right.onClick : undefined
  }, /*#__PURE__*/React.createElement(Ionicons, {
    name: right.icon,
    size: right.size || 20,
    color: right.color || variantStyles[InputType].color
  }))) : right !== null && right !== void 0 && right.icon && /*#__PURE__*/React.isValidElement(right.icon) ? right.icon : null))), /*#__PURE__*/React.createElement(InputFooter, {
    helperText: helperText,
    helperTextStyles: HelperTextStyles,
    counterStyles: CounterStyles,
    options: {
      counter: options === null || options === void 0 ? void 0 : options.counter,
      charLength: charLength,
      maxLength: maxLength,
      counterColor: options === null || options === void 0 ? void 0 : options.counterColor
    }
  }));
};
//# sourceMappingURL=epic-floating-input.js.map