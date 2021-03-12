"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputFooter = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InputFooter = ({
  styles,
  helperText,
  helperTextStyles,
  counterStyles,
  options,
  color
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [{
      flexDirection: "row",
      flexWrap: "wrap"
    }, styles]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: "70%",
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }, typeof helperText === "string" ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [helperTextStyles]
  }, helperText) : helperText && /*#__PURE__*/_react.default.isValidElement(helperText) ? helperText : null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: "30%",
      justifyContent: "center",
      alignItems: "flex-end"
    }
  }, options !== null && options !== void 0 && options.counter ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [counterStyles]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      color: options.counterColor || color
    }
  }, options.charLength), options.maxLength ? " / " + options.maxLength : null) : null)));
};

exports.InputFooter = InputFooter;
//# sourceMappingURL=input-footer.js.map