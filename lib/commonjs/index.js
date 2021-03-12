"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _epicFloatingInput = require("./component/epic-floating-input");

Object.keys(_epicFloatingInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _epicFloatingInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _epicFloatingInput[key];
    }
  });
});
//# sourceMappingURL=index.js.map