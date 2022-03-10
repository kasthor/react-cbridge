import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniswapV2, IUniswapV2Interface } from "../IUniswapV2";
export declare class IUniswapV2__factory {
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
    static createInterface(): IUniswapV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV2;
}
