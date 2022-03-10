import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISwapToken, ISwapTokenInterface } from "../ISwapToken";
export declare class ISwapToken__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ISwapTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISwapToken;
}
