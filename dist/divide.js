import invariant from 'tiny-invariant';
const PRECISION = 6;
export const divide = (number, divider, precision = PRECISION) => {
    invariant(number != null, 'Number is required');
    invariant(divider != null, 'Divider is required');
    const multiplier = Math.pow(10, precision);
    return number.mul(multiplier).div(divider).toNumber() / multiplier;
};
