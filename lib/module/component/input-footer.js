import React from "react";
import { Text, View } from "react-native";
export const InputFooter = ({
  styles,
  helperText,
  helperTextStyles,
  counterStyles,
  options,
  color
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
    style: [{
      flexDirection: "row",
      flexWrap: "wrap"
    }, styles]
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      width: "70%",
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }, typeof helperText === "string" ? /*#__PURE__*/React.createElement(Text, {
    style: [helperTextStyles]
  }, helperText) : helperText && /*#__PURE__*/React.isValidElement(helperText) ? helperText : null), /*#__PURE__*/React.createElement(View, {
    style: {
      width: "30%",
      justifyContent: "center",
      alignItems: "flex-end"
    }
  }, options !== null && options !== void 0 && options.counter ? /*#__PURE__*/React.createElement(Text, {
    style: [counterStyles]
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: options.counterColor || color
    }
  }, options.charLength), options.maxLength ? " / " + options.maxLength : null) : null)));
};
//# sourceMappingURL=input-footer.js.map