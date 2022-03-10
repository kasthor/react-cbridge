/**
 * @fileoverview gRPC-Web generated client stub for sgn.farming.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_farming_v1_tx_pb from '../../../sgn/farming/v1/tx_pb';
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
    methodInfoClaimRewards: grpcWeb.MethodDescriptor<sgn_farming_v1_tx_pb.MsgClaimRewards, sgn_farming_v1_tx_pb.MsgClaimRewardsResponse>;
    claimRewards(request: sgn_farming_v1_tx_pb.MsgClaimRewards, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_tx_pb.MsgClaimRewardsResponse>;
    claimRewards(request: sgn_farming_v1_tx_pb.MsgClaimRewards, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_tx_pb.MsgClaimRewardsResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_tx_pb.MsgClaimRewardsResponse>;
    methodInfoClaimAllRewards: grpcWeb.MethodDescriptor<sgn_farming_v1_tx_pb.MsgClaimAllRewards, sgn_farming_v1_tx_pb.MsgClaimAllRewardsResponse>;
    claimAllRewards(request: sgn_farming_v1_tx_pb.MsgClaimAllRewards, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_tx_pb.MsgClaimAllRewardsResponse>;
    claimAllRewards(request: sgn_farming_v1_tx_pb.MsgClaimAllRewards, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_tx_pb.MsgClaimAllRewardsResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_tx_pb.MsgClaimAllRewardsResponse>;
    methodInfoSignRewards: grpcWeb.MethodDescriptor<sgn_farming_v1_tx_pb.MsgSignRewards, sgn_farming_v1_tx_pb.MsgSignRewardsResponse>;
    signRewards(request: sgn_farming_v1_tx_pb.MsgSignRewards, metadata: grpcWeb.Metadata | null): Promise<sgn_farming_v1_tx_pb.MsgSignRewardsResponse>;
    signRewards(request: sgn_farming_v1_tx_pb.MsgSignRewards, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_farming_v1_tx_pb.MsgSignRewardsResponse) => void): grpcWeb.ClientReadableStream<sgn_farming_v1_tx_pb.MsgSignRewardsResponse>;
}
