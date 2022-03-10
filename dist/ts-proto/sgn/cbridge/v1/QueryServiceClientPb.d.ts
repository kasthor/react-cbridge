/**
 * @fileoverview gRPC-Web generated client stub for sgn.cbridge.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_cbridge_v1_query_pb from '../../../sgn/cbridge/v1/query_pb';
export declare class QueryClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodInfoQueryParams: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.EmptyRequest, sgn_cbridge_v1_query_pb.QueryParamsResponse>;
    queryParams(request: sgn_cbridge_v1_query_pb.EmptyRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryParamsResponse>;
    queryParams(request: sgn_cbridge_v1_query_pb.EmptyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryParamsResponse>;
    methodInfoQueryConfig: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.EmptyRequest, sgn_cbridge_v1_query_pb.QueryConfigResponse>;
    queryConfig(request: sgn_cbridge_v1_query_pb.EmptyRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryConfigResponse>;
    queryConfig(request: sgn_cbridge_v1_query_pb.EmptyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryConfigResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryConfigResponse>;
    methodInfoQueryRelay: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.QueryRelayRequest, sgn_cbridge_v1_query_pb.QueryRelayResponse>;
    queryRelay(request: sgn_cbridge_v1_query_pb.QueryRelayRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryRelayResponse>;
    queryRelay(request: sgn_cbridge_v1_query_pb.QueryRelayRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryRelayResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryRelayResponse>;
    methodInfoQueryChainSigners: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.QueryChainSignersRequest, sgn_cbridge_v1_query_pb.QueryChainSignersResponse>;
    queryChainSigners(request: sgn_cbridge_v1_query_pb.QueryChainSignersRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryChainSignersResponse>;
    queryChainSigners(request: sgn_cbridge_v1_query_pb.QueryChainSignersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryChainSignersResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryChainSignersResponse>;
    methodInfoQueryLatestSigners: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.EmptyRequest, sgn_cbridge_v1_query_pb.QueryLatestSignersResponse>;
    queryLatestSigners(request: sgn_cbridge_v1_query_pb.EmptyRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryLatestSignersResponse>;
    queryLatestSigners(request: sgn_cbridge_v1_query_pb.EmptyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryLatestSignersResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryLatestSignersResponse>;
    methodInfoQueryCheckChainTokenValid: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.CheckChainTokenValidRequest, sgn_cbridge_v1_query_pb.CheckChainTokenValidResponse>;
    queryCheckChainTokenValid(request: sgn_cbridge_v1_query_pb.CheckChainTokenValidRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.CheckChainTokenValidResponse>;
    queryCheckChainTokenValid(request: sgn_cbridge_v1_query_pb.CheckChainTokenValidRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.CheckChainTokenValidResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.CheckChainTokenValidResponse>;
    methodInfoQueryChkLiqSum: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.CheckLiqSumRequest, sgn_cbridge_v1_query_pb.CheckLiqSumResponse>;
    queryChkLiqSum(request: sgn_cbridge_v1_query_pb.CheckLiqSumRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.CheckLiqSumResponse>;
    queryChkLiqSum(request: sgn_cbridge_v1_query_pb.CheckLiqSumRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.CheckLiqSumResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.CheckLiqSumResponse>;
    methodInfoQueryDebugAny: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.QueryDebugAnyRequest, sgn_cbridge_v1_query_pb.QueryDebugAnyResponse>;
    queryDebugAny(request: sgn_cbridge_v1_query_pb.QueryDebugAnyRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryDebugAnyResponse>;
    queryDebugAny(request: sgn_cbridge_v1_query_pb.QueryDebugAnyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryDebugAnyResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryDebugAnyResponse>;
    methodInfoQueryAssets: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.EmptyRequest, sgn_cbridge_v1_query_pb.QueryAssetsResponse>;
    queryAssets(request: sgn_cbridge_v1_query_pb.EmptyRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryAssetsResponse>;
    queryAssets(request: sgn_cbridge_v1_query_pb.EmptyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryAssetsResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryAssetsResponse>;
    methodInfoQueryAssetPrice: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.QueryAssetPriceRequest, sgn_cbridge_v1_query_pb.QueryAssetPriceResponse>;
    queryAssetPrice(request: sgn_cbridge_v1_query_pb.QueryAssetPriceRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryAssetPriceResponse>;
    queryAssetPrice(request: sgn_cbridge_v1_query_pb.QueryAssetPriceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryAssetPriceResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryAssetPriceResponse>;
    methodInfoChainTokensConfig: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.ChainTokensConfigRequest, sgn_cbridge_v1_query_pb.ChainTokensConfigResponse>;
    chainTokensConfig(request: sgn_cbridge_v1_query_pb.ChainTokensConfigRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.ChainTokensConfigResponse>;
    chainTokensConfig(request: sgn_cbridge_v1_query_pb.ChainTokensConfigRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.ChainTokensConfigResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.ChainTokensConfigResponse>;
    methodInfoGetFee: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.GetFeeRequest, sgn_cbridge_v1_query_pb.GetFeeResponse>;
    getFee(request: sgn_cbridge_v1_query_pb.GetFeeRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.GetFeeResponse>;
    getFee(request: sgn_cbridge_v1_query_pb.GetFeeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.GetFeeResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.GetFeeResponse>;
    methodInfoGetFeePercentage: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.GetFeePercentageRequest, sgn_cbridge_v1_query_pb.GetFeePercentageResponse>;
    getFeePercentage(request: sgn_cbridge_v1_query_pb.GetFeePercentageRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.GetFeePercentageResponse>;
    getFeePercentage(request: sgn_cbridge_v1_query_pb.GetFeePercentageRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.GetFeePercentageResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.GetFeePercentageResponse>;
    methodInfoQueryTransferStatus: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.QueryTransferStatusRequest, sgn_cbridge_v1_query_pb.QueryTransferStatusResponse>;
    queryTransferStatus(request: sgn_cbridge_v1_query_pb.QueryTransferStatusRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryTransferStatusResponse>;
    queryTransferStatus(request: sgn_cbridge_v1_query_pb.QueryTransferStatusRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryTransferStatusResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryTransferStatusResponse>;
    methodInfoLiquidityDetailList: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.LiquidityDetailListRequest, sgn_cbridge_v1_query_pb.LiquidityDetailListResponse>;
    liquidityDetailList(request: sgn_cbridge_v1_query_pb.LiquidityDetailListRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.LiquidityDetailListResponse>;
    liquidityDetailList(request: sgn_cbridge_v1_query_pb.LiquidityDetailListRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.LiquidityDetailListResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.LiquidityDetailListResponse>;
    methodInfoQueryTotalLiquidity: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.QueryTotalLiquidityRequest, sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse>;
    queryTotalLiquidity(request: sgn_cbridge_v1_query_pb.QueryTotalLiquidityRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse>;
    queryTotalLiquidity(request: sgn_cbridge_v1_query_pb.QueryTotalLiquidityRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse>;
    methodInfoQueryAddLiquidityStatus: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.QueryAddLiquidityStatusRequest, sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;
    queryAddLiquidityStatus(request: sgn_cbridge_v1_query_pb.QueryAddLiquidityStatusRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;
    queryAddLiquidityStatus(request: sgn_cbridge_v1_query_pb.QueryAddLiquidityStatusRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;
    methodInfoQueryWithdrawLiquidityStatus: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.QueryWithdrawLiquidityStatusRequest, sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;
    queryWithdrawLiquidityStatus(request: sgn_cbridge_v1_query_pb.QueryWithdrawLiquidityStatusRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;
    queryWithdrawLiquidityStatus(request: sgn_cbridge_v1_query_pb.QueryWithdrawLiquidityStatusRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;
    methodInfoQueryLPs: grpcWeb.MethodDescriptor<sgn_cbridge_v1_query_pb.QueryLPsRequest, sgn_cbridge_v1_query_pb.QueryLPsResponse>;
    queryLPs(request: sgn_cbridge_v1_query_pb.QueryLPsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryLPsResponse>;
    queryLPs(request: sgn_cbridge_v1_query_pb.QueryLPsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_query_pb.QueryLPsResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryLPsResponse>;
}
