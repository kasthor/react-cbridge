import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISwapCanoToken, ISwapCanoTokenInterface } from "../ISwapCanoToken";
export declare class ISwapCanoToken__factory {
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
    static createInterface(): ISwapCanoTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISwapCanoToken;
}
