import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPeggedToken, IPeggedTokenInterface } from "../IPeggedToken";
export declare class IPeggedToken__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IPeggedTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeggedToken;
}
