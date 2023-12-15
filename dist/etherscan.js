import invariant from 'tiny-invariant';
import { CHAINS } from '@lynx-sdk/constants';
export var ETHERSCAN_ENTITIES;
(function (ETHERSCAN_ENTITIES) {
    ETHERSCAN_ENTITIES["Tx"] = "tx";
    ETHERSCAN_ENTITIES["Token"] = "token";
    ETHERSCAN_ENTITIES["Address"] = "address";
})(ETHERSCAN_ENTITIES || (ETHERSCAN_ENTITIES = {}));
export const ETHERSCAN_PREFIX_BY_NETWORK = {
    [CHAINS.Mainnet]: '',
    [CHAINS.Ropsten]: 'ropsten.',
    [CHAINS.Rinkeby]: 'rinkeby.',
    [CHAINS.Goerli]: 'goerli.',
    [CHAINS.Kovan]: 'kovan.',
    [CHAINS.Holesky]: 'holesky.',
};
export const getEtherscanPrefix = (chainId) => {
    const prefix = ETHERSCAN_PREFIX_BY_NETWORK[chainId];
    invariant(prefix != null, 'Chain is not supported');
    return prefix;
};
export const getEtherscanLink = (chainId, hash, entity) => {
    const prefix = getEtherscanPrefix(chainId);
    invariant(hash && typeof hash === 'string', 'Hash should be a string');
    invariant(entity && typeof entity === 'string', 'Entity should be a string');
    return `https://${prefix}etherscan.io/${entity}/${hash}`;
};
export const getEtherscanTxLink = (chainId, hash) => {
    return getEtherscanLink(chainId, hash, ETHERSCAN_ENTITIES.Tx);
};
export const getEtherscanTokenLink = (chainId, hash) => {
    return getEtherscanLink(chainId, hash, ETHERSCAN_ENTITIES.Token);
};
export const getEtherscanAddressLink = (chainId, hash) => {
    return getEtherscanLink(chainId, hash, ETHERSCAN_ENTITIES.Address);
};
