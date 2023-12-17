"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = void 0;
var invariant = require("tiny-invariant");
var PRECISION = 6;
var divide = function (number, divider, precision) {
    if (precision === void 0) { precision = PRECISION; }
    invariant(number != null, 'Number is required');
    invariant(divider != null, 'Divider is required');
    var multiplier = Math.pow(10, precision);
    return number.mul(multiplier).div(divider).toNumber() / multiplier;
};
exports.divide = divide;
