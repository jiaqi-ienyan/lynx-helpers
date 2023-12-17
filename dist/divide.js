"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = void 0;
var tiny_invariant_1 = require("tiny-invariant");
var PRECISION = 6;
var divide = function (number, divider, precision) {
    if (precision === void 0) { precision = PRECISION; }
    (0, tiny_invariant_1.default)(number != null, 'Number is required');
    (0, tiny_invariant_1.default)(divider != null, 'Divider is required');
    var multiplier = Math.pow(10, precision);
    return number.mul(multiplier).div(divider).toNumber() / multiplier;
};
exports.divide = divide;
