"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEtherscanAddressLink = exports.getEtherscanTokenLink = exports.getEtherscanTxLink = exports.getEtherscanLink = exports.getEtherscanPrefix = exports.ETHERSCAN_PREFIX_BY_NETWORK = exports.ETHERSCAN_ENTITIES = void 0;
var tiny_invariant_1 = require("tiny-invariant");
var constants_1 = require("@lynx-sdk/constants");
var ETHERSCAN_ENTITIES;
(function (ETHERSCAN_ENTITIES) {
    ETHERSCAN_ENTITIES["Tx"] = "tx";
    ETHERSCAN_ENTITIES["Token"] = "token";
    ETHERSCAN_ENTITIES["Address"] = "address";
})(ETHERSCAN_ENTITIES || (exports.ETHERSCAN_ENTITIES = ETHERSCAN_ENTITIES = {}));
exports.ETHERSCAN_PREFIX_BY_NETWORK = (_a = {},
    _a[constants_1.CHAINS.Mainnet] = '',
    _a[constants_1.CHAINS.Ropsten] = 'ropsten.',
    _a[constants_1.CHAINS.Rinkeby] = 'rinkeby.',
    _a[constants_1.CHAINS.Goerli] = 'goerli.',
    _a[constants_1.CHAINS.Kovan] = 'kovan.',
    _a[constants_1.CHAINS.Holesky] = 'holesky.',
    _a);
var getEtherscanPrefix = function (chainId) {
    var prefix = exports.ETHERSCAN_PREFIX_BY_NETWORK[chainId];
    (0, tiny_invariant_1.default)(prefix != null, 'Chain is not supported');
    return prefix;
};
exports.getEtherscanPrefix = getEtherscanPrefix;
var getEtherscanLink = function (chainId, hash, entity) {
    var prefix = (0, exports.getEtherscanPrefix)(chainId);
    (0, tiny_invariant_1.default)(hash && typeof hash === 'string', 'Hash should be a string');
    (0, tiny_invariant_1.default)(entity && typeof entity === 'string', 'Entity should be a string');
    return "https://".concat(prefix, "etherscan.io/").concat(entity, "/").concat(hash);
};
exports.getEtherscanLink = getEtherscanLink;
var getEtherscanTxLink = function (chainId, hash) {
    return (0, exports.getEtherscanLink)(chainId, hash, ETHERSCAN_ENTITIES.Tx);
};
exports.getEtherscanTxLink = getEtherscanTxLink;
var getEtherscanTokenLink = function (chainId, hash) {
    return (0, exports.getEtherscanLink)(chainId, hash, ETHERSCAN_ENTITIES.Token);
};
exports.getEtherscanTokenLink = getEtherscanTokenLink;
var getEtherscanAddressLink = function (chainId, hash) {
    return (0, exports.getEtherscanLink)(chainId, hash, ETHERSCAN_ENTITIES.Address);
};
exports.getEtherscanAddressLink = getEtherscanAddressLink;
