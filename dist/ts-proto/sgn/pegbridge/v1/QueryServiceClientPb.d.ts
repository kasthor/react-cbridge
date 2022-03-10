/**
 * @fileoverview gRPC-Web generated client stub for sgn.pegbridge.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_pegbridge_v1_pegbridge_pb from '../../../sgn/pegbridge/v1/pegbridge_pb';
import * as sgn_pegbridge_v1_query_pb from '../../../sgn/pegbridge/v1/query_pb';
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
    methodInfoParams: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryParamsRequest, sgn_pegbridge_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_pegbridge_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_pegbridge_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QueryParamsResponse>;
    methodInfoConfig: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryConfigRequest, sgn_pegbridge_v1_pegbridge_pb.PegConfig>;
    config(request: sgn_pegbridge_v1_query_pb.QueryConfigRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_pegbridge_pb.PegConfig>;
    config(request: sgn_pegbridge_v1_query_pb.QueryConfigRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_pegbridge_pb.PegConfig) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_pegbridge_pb.PegConfig>;
    methodInfoOrigPeggedPairs: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryOrigPeggedPairsRequest, sgn_pegbridge_v1_query_pb.QueryOrigPeggedPairsResponse>;
    origPeggedPairs(request: sgn_pegbridge_v1_query_pb.QueryOrigPeggedPairsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QueryOrigPeggedPairsResponse>;
    origPeggedPairs(request: sgn_pegbridge_v1_query_pb.QueryOrigPeggedPairsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QueryOrigPeggedPairsResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QueryOrigPeggedPairsResponse>;
    methodInfoEstimatedAmountFees: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryEstimatedAmountFeesRequest, sgn_pegbridge_v1_query_pb.QueryEstimatedAmountFeesResponse>;
    estimatedAmountFees(request: sgn_pegbridge_v1_query_pb.QueryEstimatedAmountFeesRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QueryEstimatedAmountFeesResponse>;
    estimatedAmountFees(request: sgn_pegbridge_v1_query_pb.QueryEstimatedAmountFeesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QueryEstimatedAmountFeesResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QueryEstimatedAmountFeesResponse>;
    methodInfoDepositInfo: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryDepositInfoRequest, sgn_pegbridge_v1_query_pb.QueryDepositInfoResponse>;
    depositInfo(request: sgn_pegbridge_v1_query_pb.QueryDepositInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QueryDepositInfoResponse>;
    depositInfo(request: sgn_pegbridge_v1_query_pb.QueryDepositInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QueryDepositInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QueryDepositInfoResponse>;
    methodInfoWithdrawInfo: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryWithdrawInfoRequest, sgn_pegbridge_v1_query_pb.QueryWithdrawInfoResponse>;
    withdrawInfo(request: sgn_pegbridge_v1_query_pb.QueryWithdrawInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QueryWithdrawInfoResponse>;
    withdrawInfo(request: sgn_pegbridge_v1_query_pb.QueryWithdrawInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QueryWithdrawInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QueryWithdrawInfoResponse>;
    methodInfoMintInfo: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryMintInfoRequest, sgn_pegbridge_v1_query_pb.QueryMintInfoResponse>;
    mintInfo(request: sgn_pegbridge_v1_query_pb.QueryMintInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QueryMintInfoResponse>;
    mintInfo(request: sgn_pegbridge_v1_query_pb.QueryMintInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QueryMintInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QueryMintInfoResponse>;
    methodInfoBurnInfo: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryBurnInfoRequest, sgn_pegbridge_v1_query_pb.QueryBurnInfoResponse>;
    burnInfo(request: sgn_pegbridge_v1_query_pb.QueryBurnInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QueryBurnInfoResponse>;
    burnInfo(request: sgn_pegbridge_v1_query_pb.QueryBurnInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QueryBurnInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QueryBurnInfoResponse>;
    methodInfoFeeClaimInfo: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryFeeClaimInfoRequest, sgn_pegbridge_v1_query_pb.QueryFeeClaimInfoResponse>;
    feeClaimInfo(request: sgn_pegbridge_v1_query_pb.QueryFeeClaimInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QueryFeeClaimInfoResponse>;
    feeClaimInfo(request: sgn_pegbridge_v1_query_pb.QueryFeeClaimInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QueryFeeClaimInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QueryFeeClaimInfoResponse>;
    methodInfoSupplyInfo: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QuerySupplyInfoRequest, sgn_pegbridge_v1_query_pb.QuerySupplyInfoResponse>;
    supplyInfo(request: sgn_pegbridge_v1_query_pb.QuerySupplyInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QuerySupplyInfoResponse>;
    supplyInfo(request: sgn_pegbridge_v1_query_pb.QuerySupplyInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QuerySupplyInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QuerySupplyInfoResponse>;
    methodInfoRefundClaimInfo: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_query_pb.QueryRefundClaimInfoRequest, sgn_pegbridge_v1_query_pb.QueryRefundClaimInfoResponse>;
    refundClaimInfo(request: sgn_pegbridge_v1_query_pb.QueryRefundClaimInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_query_pb.QueryRefundClaimInfoResponse>;
    refundClaimInfo(request: sgn_pegbridge_v1_query_pb.QueryRefundClaimInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_query_pb.QueryRefundClaimInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_query_pb.QueryRefundClaimInfoResponse>;
}
