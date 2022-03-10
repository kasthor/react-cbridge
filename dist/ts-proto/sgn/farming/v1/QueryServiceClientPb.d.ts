/**
 * @fileoverview gRPC-Web generated client stub for sgn.farming.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_farming_v1_query_pb from '../../../sgn/farming/v1/query_pb';
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
    methodInfoParams: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryParamsRequest, sgn_farming_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_farming_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_farming_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryParamsResponse>;
    methodInfoPools: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryPoolsRequest, sgn_farming_v1_query_pb.QueryPoolsResponse>;
    pools(request: sgn_farming_v1_query_pb.QueryPoolsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryPoolsResponse>;
    pools(request: sgn_farming_v1_query_pb.QueryPoolsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryPoolsResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryPoolsResponse>;
    methodInfoPool: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryPoolRequest, sgn_farming_v1_query_pb.QueryPoolResponse>;
    pool(request: sgn_farming_v1_query_pb.QueryPoolRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryPoolResponse>;
    pool(request: sgn_farming_v1_query_pb.QueryPoolRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryPoolResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryPoolResponse>;
    methodInfoTokens: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryTokensRequest, sgn_farming_v1_query_pb.QueryTokensResponse>;
    tokens(request: sgn_farming_v1_query_pb.QueryTokensRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryTokensResponse>;
    tokens(request: sgn_farming_v1_query_pb.QueryTokensRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryTokensResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryTokensResponse>;
    methodInfoToken: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryTokenRequest, sgn_farming_v1_query_pb.QueryTokenResponse>;
    token(request: sgn_farming_v1_query_pb.QueryTokenRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryTokenResponse>;
    token(request: sgn_farming_v1_query_pb.QueryTokenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryTokenResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryTokenResponse>;
    methodInfoRewardContracts: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryRewardContractsRequest, sgn_farming_v1_query_pb.QueryRewardContractsResponse>;
    rewardContracts(request: sgn_farming_v1_query_pb.QueryRewardContractsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryRewardContractsResponse>;
    rewardContracts(request: sgn_farming_v1_query_pb.QueryRewardContractsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryRewardContractsResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryRewardContractsResponse>;
    methodInfoRewardContract: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryRewardContractRequest, sgn_farming_v1_query_pb.QueryRewardContractResponse>;
    rewardContract(request: sgn_farming_v1_query_pb.QueryRewardContractRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryRewardContractResponse>;
    rewardContract(request: sgn_farming_v1_query_pb.QueryRewardContractRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryRewardContractResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryRewardContractResponse>;
    methodInfoEarnings: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryEarningsRequest, sgn_farming_v1_query_pb.QueryEarningsResponse>;
    earnings(request: sgn_farming_v1_query_pb.QueryEarningsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryEarningsResponse>;
    earnings(request: sgn_farming_v1_query_pb.QueryEarningsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryEarningsResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryEarningsResponse>;
    methodInfoStakeInfo: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryStakeInfoRequest, sgn_farming_v1_query_pb.QueryStakeInfoResponse>;
    stakeInfo(request: sgn_farming_v1_query_pb.QueryStakeInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryStakeInfoResponse>;
    stakeInfo(request: sgn_farming_v1_query_pb.QueryStakeInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryStakeInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryStakeInfoResponse>;
    methodInfoAccountInfo: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryAccountInfoRequest, sgn_farming_v1_query_pb.QueryAccountInfoResponse>;
    accountInfo(request: sgn_farming_v1_query_pb.QueryAccountInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryAccountInfoResponse>;
    accountInfo(request: sgn_farming_v1_query_pb.QueryAccountInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryAccountInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryAccountInfoResponse>;
    methodInfoAccountsStakedIn: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryAccountsStakedInRequest, sgn_farming_v1_query_pb.QueryAccountsStakedInResponse>;
    accountsStakedIn(request: sgn_farming_v1_query_pb.QueryAccountsStakedInRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryAccountsStakedInResponse>;
    accountsStakedIn(request: sgn_farming_v1_query_pb.QueryAccountsStakedInRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryAccountsStakedInResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryAccountsStakedInResponse>;
    methodInfoNumPools: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryNumPoolsRequest, sgn_farming_v1_query_pb.QueryNumPoolsResponse>;
    numPools(request: sgn_farming_v1_query_pb.QueryNumPoolsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryNumPoolsResponse>;
    numPools(request: sgn_farming_v1_query_pb.QueryNumPoolsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryNumPoolsResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryNumPoolsResponse>;
    methodInfoRewardClaimInfo: grpcWeb.MethodDescriptor<sgn_farming_v1_query_pb.QueryRewardClaimInfoRequest, sgn_farming_v1_query_pb.QueryRewardClaimInfoResponse>;
    rewardClaimInfo(request: sgn_farming_v1_query_pb.QueryRewardClaimInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_query_pb.QueryRewardClaimInfoResponse>;
    rewardClaimInfo(request: sgn_farming_v1_query_pb.QueryRewardClaimInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_query_pb.QueryRewardClaimInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_query_pb.QueryRewardClaimInfoResponse>;
}
