"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(errorMessage) {
  return function (value) {
    if (!value) throw Error("Argument Error. Expected value, got ".concat(value));
    return (0, _isEmail["default"])(value) ? undefined : errorMessage;
  };
};

exports["default"] = _default;