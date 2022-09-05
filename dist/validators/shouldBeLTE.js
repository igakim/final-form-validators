"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(lte) {
  var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Value is longer than required';
  return function (value) {
    if (!value) throw Error("Argument Error. Expected value, got ".concat(value));
    if (!lte) throw Error("Argument Error. Expected lte, got ".concat(value));
    return value.length <= lte ? undefined : errorMessage;
  };
};

exports["default"] = _default;