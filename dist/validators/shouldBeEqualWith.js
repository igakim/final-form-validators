"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(valueToEqual) {
  var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Values must be equal';
  return function (value) {
    return value === valueToEqual ? undefined : errorMessage;
  };
};

exports["default"] = _default;