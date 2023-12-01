"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSendAbi = void 0;
exports.MultiSendAbi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [{ internalType: "bytes", name: "transactions", type: "bytes" }],
        name: "multiSend",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
//# sourceMappingURL=MultiSendAbi.js.map