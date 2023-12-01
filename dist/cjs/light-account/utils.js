"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultLightAccountFactoryAddress = void 0;
const chains_1 = require("viem/chains");
const getDefaultLightAccountFactoryAddress = (chain) => {
    switch (chain.id) {
        case chains_1.mainnet.id:
        case chains_1.sepolia.id:
        case chains_1.goerli.id:
        case chains_1.polygon.id:
        case chains_1.polygonMumbai.id:
        case chains_1.optimism.id:
        case chains_1.optimismGoerli.id:
        case chains_1.optimismSepolia.id:
        case chains_1.arbitrum.id:
        case chains_1.arbitrumGoerli.id:
        case chains_1.arbitrumSepolia.id:
        case chains_1.base.id:
        case chains_1.baseGoerli.id:
        case chains_1.baseSepolia.id:
            return "0x412BA24Ca34634A9959dB0C7d144E0373AFbc7aB";
    }
    throw new Error(`no default light account factory contract exists for ${chain.name}`);
};
exports.getDefaultLightAccountFactoryAddress = getDefaultLightAccountFactoryAddress;
//# sourceMappingURL=utils.js.map