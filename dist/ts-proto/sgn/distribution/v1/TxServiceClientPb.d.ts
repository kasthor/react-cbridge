/**
 * @fileoverview gRPC-Web generated client stub for sgn.distribution.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_distribution_v1_tx_pb from '../../../sgn/distribution/v1/tx_pb';
export declare class MsgClient {
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
    methodInfoSetWithdrawAddress: grpcWeb.MethodDescriptor<sgn_distribution_v1_tx_pb.MsgSetWithdrawAddress, sgn_distribution_v1_tx_pb.MsgSetWithdrawAddressResponse>;
    setWithdrawAddress(request: sgn_distribution_v1_tx_pb.MsgSetWithdrawAddress, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_tx_pb.MsgSetWithdrawAddressResponse>;
    setWithdrawAddress(request: sgn_distribution_v1_tx_pb.MsgSetWithdrawAddress, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_tx_pb.MsgSetWithdrawAddressResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_tx_pb.MsgSetWithdrawAddressResponse>;
    methodInfoWithdrawDelegatorReward: grpcWeb.MethodDescriptor<sgn_distribution_v1_tx_pb.MsgWithdrawDelegatorReward, sgn_distribution_v1_tx_pb.MsgWithdrawDelegatorRewardResponse>;
    withdrawDelegatorReward(request: sgn_distribution_v1_tx_pb.MsgWithdrawDelegatorReward, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_tx_pb.MsgWithdrawDelegatorRewardResponse>;
    withdrawDelegatorReward(request: sgn_distribution_v1_tx_pb.MsgWithdrawDelegatorReward, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_tx_pb.MsgWithdrawDelegatorRewardResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_tx_pb.MsgWithdrawDelegatorRewardResponse>;
    methodInfoWithdrawValidatorCommission: grpcWeb.MethodDescriptor<sgn_distribution_v1_tx_pb.MsgWithdrawValidatorCommission, sgn_distribution_v1_tx_pb.MsgWithdrawValidatorCommissionResponse>;
    withdrawValidatorCommission(request: sgn_distribution_v1_tx_pb.MsgWithdrawValidatorCommission, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_tx_pb.MsgWithdrawValidatorCommissionResponse>;
    withdrawValidatorCommission(request: sgn_distribution_v1_tx_pb.MsgWithdrawValidatorCommission, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_tx_pb.MsgWithdrawValidatorCommissionResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_tx_pb.MsgWithdrawValidatorCommissionResponse>;
    methodInfoFundCommunityPool: grpcWeb.MethodDescriptor<sgn_distribution_v1_tx_pb.MsgFundCommunityPool, sgn_distribution_v1_tx_pb.MsgFundCommunityPoolResponse>;
    fundCommunityPool(request: sgn_distribution_v1_tx_pb.MsgFundCommunityPool, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_tx_pb.MsgFundCommunityPoolResponse>;
    fundCommunityPool(request: sgn_distribution_v1_tx_pb.MsgFundCommunityPool, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_tx_pb.MsgFundCommunityPoolResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_tx_pb.MsgFundCommunityPoolResponse>;
    methodInfoClaimAllStakingReward: grpcWeb.MethodDescriptor<sgn_distribution_v1_tx_pb.MsgClaimAllStakingReward, sgn_distribution_v1_tx_pb.MsgClaimAllStakingRewardResponse>;
    claimAllStakingReward(request: sgn_distribution_v1_tx_pb.MsgClaimAllStakingReward, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_tx_pb.MsgClaimAllStakingRewardResponse>;
    claimAllStakingReward(request: sgn_distribution_v1_tx_pb.MsgClaimAllStakingReward, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_tx_pb.MsgClaimAllStakingRewardResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_tx_pb.MsgClaimAllStakingRewardResponse>;
    methodInfoSignStakingReward: grpcWeb.MethodDescriptor<sgn_distribution_v1_tx_pb.MsgSignStakingReward, sgn_distribution_v1_tx_pb.MsgSignStakingRewardResponse>;
    signStakingReward(request: sgn_distribution_v1_tx_pb.MsgSignStakingReward, metadata: grpcWeb.Metadata | null): Promise<sgn_distribution_v1_tx_pb.MsgSignStakingRewardResponse>;
    signStakingReward(request: sgn_distribution_v1_tx_pb.MsgSignStakingReward, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_distribution_v1_tx_pb.MsgSignStakingRewardResponse) => void): grpcWeb.ClientReadableStream<sgn_distribution_v1_tx_pb.MsgSignStakingRewardResponse>;
}
