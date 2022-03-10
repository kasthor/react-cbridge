import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISigsVerifier, ISigsVerifierInterface } from "../ISigsVerifier";
export declare class ISigsVerifier__factory {
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
    static createInterface(): ISigsVerifierInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISigsVerifier;
}
