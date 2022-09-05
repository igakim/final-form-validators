"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(errorMessage) {
  return function (value) {
    return value ? undefined : errorMessage;
  };
};

exports["default"] = _default;