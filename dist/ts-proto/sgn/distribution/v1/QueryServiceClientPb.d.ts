/**
 * @fileoverview gRPC-Web generated client stub for sgn.distribution.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_distribution_v1_query_pb from '../../../sgn/distribution/v1/query_pb';
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
    methodInfoParams: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryParamsRequest, sgn_distribution_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_distribution_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_distribution_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryParamsResponse>;
    methodInfoValidatorOutstandingRewards: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryValidatorOutstandingRewardsRequest, sgn_distribution_v1_query_pb.QueryValidatorOutstandingRewardsResponse>;
    validatorOutstandingRewards(request: sgn_distribution_v1_query_pb.QueryValidatorOutstandingRewardsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryValidatorOutstandingRewardsResponse>;
    validatorOutstandingRewards(request: sgn_distribution_v1_query_pb.QueryValidatorOutstandingRewardsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryValidatorOutstandingRewardsResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryValidatorOutstandingRewardsResponse>;
    methodInfoValidatorCommission: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryValidatorCommissionRequest, sgn_distribution_v1_query_pb.QueryValidatorCommissionResponse>;
    validatorCommission(request: sgn_distribution_v1_query_pb.QueryValidatorCommissionRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryValidatorCommissionResponse>;
    validatorCommission(request: sgn_distribution_v1_query_pb.QueryValidatorCommissionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryValidatorCommissionResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryValidatorCommissionResponse>;
    methodInfoDelegationRewards: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryDelegationRewardsRequest, sgn_distribution_v1_query_pb.QueryDelegationRewardsResponse>;
    delegationRewards(request: sgn_distribution_v1_query_pb.QueryDelegationRewardsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryDelegationRewardsResponse>;
    delegationRewards(request: sgn_distribution_v1_query_pb.QueryDelegationRewardsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryDelegationRewardsResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryDelegationRewardsResponse>;
    methodInfoDelegationTotalRewards: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryDelegationTotalRewardsRequest, sgn_distribution_v1_query_pb.QueryDelegationTotalRewardsResponse>;
    delegationTotalRewards(request: sgn_distribution_v1_query_pb.QueryDelegationTotalRewardsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryDelegationTotalRewardsResponse>;
    delegationTotalRewards(request: sgn_distribution_v1_query_pb.QueryDelegationTotalRewardsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryDelegationTotalRewardsResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryDelegationTotalRewardsResponse>;
    methodInfoDelegatorValidators: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryDelegatorValidatorsRequest, sgn_distribution_v1_query_pb.QueryDelegatorValidatorsResponse>;
    delegatorValidators(request: sgn_distribution_v1_query_pb.QueryDelegatorValidatorsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryDelegatorValidatorsResponse>;
    delegatorValidators(request: sgn_distribution_v1_query_pb.QueryDelegatorValidatorsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryDelegatorValidatorsResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryDelegatorValidatorsResponse>;
    methodInfoDelegatorWithdrawAddress: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryDelegatorWithdrawAddressRequest, sgn_distribution_v1_query_pb.QueryDelegatorWithdrawAddressResponse>;
    delegatorWithdrawAddress(request: sgn_distribution_v1_query_pb.QueryDelegatorWithdrawAddressRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryDelegatorWithdrawAddressResponse>;
    delegatorWithdrawAddress(request: sgn_distribution_v1_query_pb.QueryDelegatorWithdrawAddressRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryDelegatorWithdrawAddressResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryDelegatorWithdrawAddressResponse>;
    methodInfoCommunityPool: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryCommunityPoolRequest, sgn_distribution_v1_query_pb.QueryCommunityPoolResponse>;
    communityPool(request: sgn_distribution_v1_query_pb.QueryCommunityPoolRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryCommunityPoolResponse>;
    communityPool(request: sgn_distribution_v1_query_pb.QueryCommunityPoolRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryCommunityPoolResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryCommunityPoolResponse>;
    methodInfoStakingRewardInfo: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryStakingRewardInfoRequest, sgn_distribution_v1_query_pb.QueryStakingRewardInfoResponse>;
    stakingRewardInfo(request: sgn_distribution_v1_query_pb.QueryStakingRewardInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryStakingRewardInfoResponse>;
    stakingRewardInfo(request: sgn_distribution_v1_query_pb.QueryStakingRewardInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryStakingRewardInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryStakingRewardInfoResponse>;
    methodInfoStakingRewardClaimInfo: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryStakingRewardClaimInfoRequest, sgn_distribution_v1_query_pb.QueryStakingRewardClaimInfoResponse>;
    stakingRewardClaimInfo(request: sgn_distribution_v1_query_pb.QueryStakingRewardClaimInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryStakingRewardClaimInfoResponse>;
    stakingRewardClaimInfo(request: sgn_distribution_v1_query_pb.QueryStakingRewardClaimInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryStakingRewardClaimInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryStakingRewardClaimInfoResponse>;
    methodInfoCBridgeFeeShareInfo: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryCBridgeFeeShareInfoRequest, sgn_distribution_v1_query_pb.QueryCBridgeFeeShareInfoResponse>;
    cBridgeFeeShareInfo(request: sgn_distribution_v1_query_pb.QueryCBridgeFeeShareInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryCBridgeFeeShareInfoResponse>;
    cBridgeFeeShareInfo(request: sgn_distribution_v1_query_pb.QueryCBridgeFeeShareInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryCBridgeFeeShareInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryCBridgeFeeShareInfoResponse>;
    methodInfoPegBridgeFeesInfo: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryPegBridgeFeesInfoRequest, sgn_distribution_v1_query_pb.QueryPegBridgeFeesInfoResponse>;
    pegBridgeFeesInfo(request: sgn_distribution_v1_query_pb.QueryPegBridgeFeesInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryPegBridgeFeesInfoResponse>;
    pegBridgeFeesInfo(request: sgn_distribution_v1_query_pb.QueryPegBridgeFeesInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryPegBridgeFeesInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryPegBridgeFeesInfoResponse>;
    methodInfoMessageFeesInfo: grpcWeb.MethodDescriptor<sgn_distribution_v1_query_pb.QueryMessageFeesInfoRequest, sgn_distribution_v1_query_pb.QueryMessageFeesInfoResponse>;
    messageFeesInfo(request: sgn_distribution_v1_query_pb.QueryMessageFeesInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_query_pb.QueryMessageFeesInfoResponse>;
    messageFeesInfo(request: sgn_distribution_v1_query_pb.QueryMessageFeesInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_query_pb.QueryMessageFeesInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_query_pb.QueryMessageFeesInfoResponse>;
}
