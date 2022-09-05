"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(errorMessage) {
  return function (value, lte) {
    if (!value) throw Error("Argument Error. Expected value, got ".concat(value));
    if (!lte) throw Error("Argument Error. Expected lte, got ".concat(value));
    return value.length <= lte ? undefined : errorMessage;
  };
};

exports["default"] = _default;