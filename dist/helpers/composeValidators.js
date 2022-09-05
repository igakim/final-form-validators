"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return function (value, allValues) {
    return validators.reduce(function (error, validator) {
      return error || validator(value, allValues);
    }, undefined);
  };
};

exports["default"] = _default;