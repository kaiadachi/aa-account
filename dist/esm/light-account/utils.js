import { arbitrum, arbitrumGoerli, arbitrumSepolia, base, baseGoerli, baseSepolia, goerli, mainnet, optimism, optimismGoerli, optimismSepolia, polygon, polygonMumbai, sepolia, } from "viem/chains";
export const getDefaultLightAccountFactoryAddress = (chain) => {
    switch (chain.id) {
        case mainnet.id:
        case sepolia.id:
        case goerli.id:
        case polygon.id:
        case polygonMumbai.id:
        case optimism.id:
        case optimismGoerli.id:
        case optimismSepolia.id:
        case arbitrum.id:
        case arbitrumGoerli.id:
        case arbitrumSepolia.id:
        case base.id:
        case baseGoerli.id:
        case baseSepolia.id:
            return "0x412BA24Ca34634A9959dB0C7d144E0373AFbc7aB";
    }
    throw new Error(`no default light account factory contract exists for ${chain.name}`);
};
//# sourceMappingURL=utils.js.map