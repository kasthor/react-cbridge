interface EstimateAmountRequest {
    sourceChainId: number;
    destinationChainId: number;
    tokenSymbol: string;
    userAddress: string;
    slippageTolerance: number;
    amount: number;
}
interface EstimateAmountResponse {
    amountInDestination: number;
    bridgeRate: number;
    liquidityFee: number;
    baseFee: number;
    slippageTolerance: number;
    maxSlippage: number;
}
export declare const useCBridge: () => {
    estimateAmount: (params: EstimateAmountRequest) => Promise<EstimateAmountResponse>;
};
export {};
