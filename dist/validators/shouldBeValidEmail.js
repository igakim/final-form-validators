"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var errorMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Value must be a valid email';
  return function (value) {
    if (!value) throw Error("Argument Error. Expected value, got ".concat(value));
    return (0, _isEmail["default"])(value) ? undefined : errorMessage;
  };
};

exports["default"] = _default;