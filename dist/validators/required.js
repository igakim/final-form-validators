"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var errorMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'This field is required!';
  return function (value) {
    return value ? undefined : errorMessage;
  };
};

exports["default"] = _default;