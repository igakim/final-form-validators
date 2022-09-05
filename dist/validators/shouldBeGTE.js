"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(gte) {
  var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Value is shorter than required';
  return function (value) {
    if (!value) throw Error("Argument Error. Expected value, got ".concat(value));
    if (!gte) throw Error("Argument Error. Expected gte, got ".concat(value));
    return value.length >= gte ? undefined : errorMessage;
  };
};

exports["default"] = _default;