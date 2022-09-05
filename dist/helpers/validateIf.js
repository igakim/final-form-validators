"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(bool) {
  return function (validate) {
    return bool ? validate : function () {};
  };
};

exports["default"] = _default;