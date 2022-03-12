// import * as React from "react";
import {
  EstimateAmtRequest,
  EstimateAmtResponse,
  GetTransferConfigsRequest,
  GetTransferConfigsResponse,
} from "./ts-proto/gateway/gateway_pb";
import { WebClient } from "./ts-proto/gateway/GatewayServiceClientPb";

import { BigNumber, ethers, utils } from "ethers";

import { testNetworks as networks } from "./chains/test";

import Bridge from "./contract/abi/Bridge.sol/Bridge.json";
import ERC20 from "./contract/abi/ERC20.sol/ERC20.json";

interface TransferRequest {
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

interface TokenConfig {
  decimals: number;
}

interface TokenAmount {
  tokenConfig: TokenConfig;
  amount: BigNumber;
}

export const useCBridge = () => {
  const client = () => {
    // https://cbridge-prod2.celer.network/
    return new WebClient("https://cbridge-v2-test.celer.network", null, null);
  };

  const transferConfigs = async () => {
    const request = new GetTransferConfigsRequest();

    const res: GetTransferConfigsResponse =
      await client().getTransferConfigsForAll(request, null);

    return {
      chains: res.getChainsList().map((chain) => ({
        id: chain.getId(),
        name: chain.getName(),
        icon: chain.getIcon(),
        contract: chain.getContractAddr(),
      })),
      tokens: res
        .getChainTokenMap()
        .getEntryList()
        .map(([id, [tokens]]: [number, any]) => ({
          id,
          tokens: tokens.map(
            ([[symbol, address, decimals]]: [[string, string, number]]) => ({
              symbol,
              address,
              decimals,
            })
          ),
        })),
    };
  };

  const estimateAmount = async (
    params: TransferRequest
  ): Promise<EstimateAmountResponse> => {
    const tokenConfig = await getToken(
      params.sourceChainId,
      params.tokenSymbol
    );
    const request = new EstimateAmtRequest();

    request.setSrcChainId(params.sourceChainId);
    request.setDstChainId(params.destinationChainId);
    request.setTokenSymbol(params.tokenSymbol);
    request.setUsrAddr(params.userAddress);
    request.setSlippageTolerance(params.slippageTolerance);
    request.setAmt(
      parseTokenBalance({
        tokenConfig,
        amount: params.amount,
      }).toString()
    );

    const res: EstimateAmtResponse = await client().estimateAmt(request, null);

    return {
      amountInDestination: formatTokenBalance({
        amount: parseTokenBalance({
          amount: parseFloat(res.getEqValueTokenAmt()),
          tokenConfig: { decimals: 0 },
        }),
        tokenConfig,
      }),
      bridgeRate: res.getBridgeRate(),
      liquidityFee: parseFloat(res.getPercFee()),
      baseFee: parseFloat(res.getBaseFee()),
      slippageTolerance: res.getSlippageTolerance(),
      maxSlippage: res.getMaxSlippage(),
    };
  };

  const getCurrentChainId = () => {
    const ethereum = window["ethereum"];

    return ethereum?.request({ method: "eth_chainId" });
  };

  const getCurrentAccount = async () => {
    const ethereum = window["ethereum"];

    return (await ethereum?.request({ method: "eth_accounts" }))?.[0];
  };

  const getWeb3Provider = () => {
    const ethereum = window["ethereum"];

    return new ethers.providers.Web3Provider(ethereum);
  };

  const getToken = async (chain: number, tokenSymbol: string) =>
    (await transferConfigs()).tokens
      .find(({ id }: { id: number }) => id === chain)
      ?.tokens.find(({ symbol }: { symbol: string }) => symbol === tokenSymbol);

  const getChainFromConfigs = async (source: number) => {
    return (await transferConfigs()).chains.find(({ id }) => id === source);
  };

  const getChainConfig = async (id: number) => {
    const chain = Object.values(networks).find(({ chainId }) => id === chainId);

    return chain;
  };

  const ensureInChain = async (id: number) => {
    const currentChainId = parseInt(await getCurrentChainId());
    const ethereum = window["ethereum"];

    if (currentChainId !== id) {
      const config = await getChainConfig(id);

      return (
        config &&
        ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${id.toString(16)}`,
              chainName: config.name,
              nativeCurrency: {
                name: config.symbol,
                symbol: config.symbol,
                decimals: 18,
              },
              rpcUrls: [config.rpcUrl],
              blockExplorerUrls: [config.blockExplorerUrl],
            },
          ],
        })
      );
    }
  };

  const isInRightChain = async ({ sourceChainId }: TransferRequest) =>
    parseInt(await getCurrentChainId()) === sourceChainId;

  const ensureInRightChain = async ({ sourceChainId }: TransferRequest) =>
    ensureInChain(sourceChainId);

  const getContract = async (contract: string, abi: any) => {
    const provider = getWeb3Provider();
    const signer = provider.getSigner();
    return new ethers.Contract(contract, abi, signer);
  };
  const getTokenContract = async ({
    sourceChainId,
    tokenSymbol,
  }: TransferRequest) => {
    const tokenConfig = await getToken(sourceChainId, tokenSymbol);
    return await getContract(tokenConfig.address, ERC20.abi);
  };

  const getBridgeContract = async (request: TransferRequest) => {
    const { contract } = (await getChainFromConfigs(request.sourceChainId)) || {
      contract: "0x0",
    };

    return getContract(contract, Bridge.abi);
  };

  const isApproved = async (request: TransferRequest): Promise<boolean> => {
    const token = await getTokenContract(request);
    const { contract } = (await getChainFromConfigs(request.sourceChainId)) || {
      contract: "0x0",
    };

    const allowance = await token.allowance(request.userAddress, contract);

    return allowance.gt(request.amount);
  };

  const doApproval = async (request: TransferRequest) => {
    const amount = BigNumber.from(2).pow(256).sub(1);
    const token = await getTokenContract(request);
    const { contract } = (await getChainFromConfigs(request.sourceChainId)) || {
      contract: "0x0",
    };
    return token.approve(contract, amount);
  };

  const rawAvailableAmountToTransfer = async ({
    sourceChainId,
    tokenSymbol,
    userAddress,
  }: TransferRequest): Promise<TokenAmount> => {
    const tokenConfig = await getToken(sourceChainId, tokenSymbol);
    const token = await getContract(tokenConfig.address, ERC20.abi);

    return { tokenConfig, amount: await token.balanceOf(userAddress) };
  };

  const availableAmountToTransfer = async (
    request: TransferRequest
  ): Promise<number> =>
    formatTokenBalance(await rawAvailableAmountToTransfer(request));

  const formatTokenBalance = ({ tokenConfig, amount }: TokenAmount): number =>
    parseFloat(utils.formatUnits(amount, tokenConfig.decimals));

  const parseTokenBalance = ({
    tokenConfig,
    amount,
  }: {
    tokenConfig: TokenConfig;
    amount: number;
  }): BigNumber => utils.parseUnits(amount.toString(), tokenConfig.decimals);

  const transferAmount = async (request: TransferRequest) => {
    const tokenConfig = await getToken(
      request.sourceChainId,
      request.tokenSymbol
    );
    const bridge = await getBridgeContract(request);

    await ensureInChain(request.sourceChainId);

    bridge.send(
      await getCurrentAccount(),
      tokenConfig.address,
      parseTokenBalance({ tokenConfig, amount: request.amount }),
      request.destinationChainId,
      new Date().getTime(),
      request.sourceChainId
    );
  };

  return {
    estimateAmount,
    transferConfigs,
    transferAmount,
    isInRightChain,
    ensureInRightChain,
    availableAmountToTransfer,
    isApproved,
    doApproval,
  };
};
