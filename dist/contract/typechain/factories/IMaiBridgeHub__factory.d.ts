import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMaiBridgeHub, IMaiBridgeHubInterface } from "../IMaiBridgeHub";
export declare class IMaiBridgeHub__factory {
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IMaiBridgeHubInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMaiBridgeHub;
}
