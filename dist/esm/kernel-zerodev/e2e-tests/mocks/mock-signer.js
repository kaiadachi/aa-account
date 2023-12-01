import {} from "@alchemy/aa-core";
import { mnemonicToAccount } from "viem/accounts";
import { OWNER_MNEMONIC } from "../constants.js";
export class MockSigner {
    constructor() {
        Object.defineProperty(this, "inner", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: mnemonicToAccount(OWNER_MNEMONIC)
        });
        Object.defineProperty(this, "signerType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "aa-sdk-tests"
        });
    }
    getAddress() {
        return Promise.resolve("0x48D4d3536cDe7A257087206870c6B6E76e3D4ff4");
    }
    signMessage(_msg) {
        return Promise.resolve("0x4d61c5c27fb64b207cbf3bcf60d78e725659cff5f93db9a1316162117dff72aa631761619d93d4d97dfb761ba00b61f9274c6a4a76e494df644d968dd84ddcdb1c");
    }
    signTypedData(_params) {
        return Promise.resolve("0x4d61c5c27fb64b207cbf3bcf60d78e725659cff5f93db9a1316162117dff72aa631761619d93d4d97dfb761ba00b61f9274c6a4a76e494df644d968dd84ddcdb1c");
    }
}
//# sourceMappingURL=mock-signer.js.map