import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFraxCanoToken, IFraxCanoTokenInterface } from "../IFraxCanoToken";
export declare class IFraxCanoToken__factory {
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
    static createInterface(): IFraxCanoTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFraxCanoToken;
}
