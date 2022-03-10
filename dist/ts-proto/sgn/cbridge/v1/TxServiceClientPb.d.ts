/**
 * @fileoverview gRPC-Web generated client stub for sgn.cbridge.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_cbridge_v1_tx_pb from '../../../sgn/cbridge/v1/tx_pb';
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
    methodInfoInitWithdraw: grpcWeb.MethodDescriptor<sgn_cbridge_v1_tx_pb.MsgInitWithdraw, sgn_cbridge_v1_tx_pb.MsgInitWithdrawResp>;
    initWithdraw(request: sgn_cbridge_v1_tx_pb.MsgInitWithdraw, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_tx_pb.MsgInitWithdrawResp>;
    initWithdraw(request: sgn_cbridge_v1_tx_pb.MsgInitWithdraw, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_tx_pb.MsgInitWithdrawResp) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_tx_pb.MsgInitWithdrawResp>;
    methodInfoSignAgain: grpcWeb.MethodDescriptor<sgn_cbridge_v1_tx_pb.MsgSignAgain, sgn_cbridge_v1_tx_pb.MsgSignAgainResp>;
    signAgain(request: sgn_cbridge_v1_tx_pb.MsgSignAgain, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_tx_pb.MsgSignAgainResp>;
    signAgain(request: sgn_cbridge_v1_tx_pb.MsgSignAgain, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_tx_pb.MsgSignAgainResp) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_tx_pb.MsgSignAgainResp>;
    methodInfoSendMySig: grpcWeb.MethodDescriptor<sgn_cbridge_v1_tx_pb.MsgSendMySig, sgn_cbridge_v1_tx_pb.MsgSendMySigResp>;
    sendMySig(request: sgn_cbridge_v1_tx_pb.MsgSendMySig, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_tx_pb.MsgSendMySigResp>;
    sendMySig(request: sgn_cbridge_v1_tx_pb.MsgSendMySig, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_tx_pb.MsgSendMySigResp) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_tx_pb.MsgSendMySigResp>;
    methodInfoUpdateLatestSigners: grpcWeb.MethodDescriptor<sgn_cbridge_v1_tx_pb.MsgUpdateLatestSigners, sgn_cbridge_v1_tx_pb.MsgUpdateLatestSignersResp>;
    updateLatestSigners(request: sgn_cbridge_v1_tx_pb.MsgUpdateLatestSigners, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_tx_pb.MsgUpdateLatestSignersResp>;
    updateLatestSigners(request: sgn_cbridge_v1_tx_pb.MsgUpdateLatestSigners, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_tx_pb.MsgUpdateLatestSignersResp) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_tx_pb.MsgUpdateLatestSignersResp>;
    methodInfoSyncFarming: grpcWeb.MethodDescriptor<sgn_cbridge_v1_tx_pb.MsgSyncFarming, sgn_cbridge_v1_tx_pb.MsgSyncFarmingResponse>;
    syncFarming(request: sgn_cbridge_v1_tx_pb.MsgSyncFarming, metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_tx_pb.MsgSyncFarmingResponse>;
    syncFarming(request: sgn_cbridge_v1_tx_pb.MsgSyncFarming, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_cbridge_v1_tx_pb.MsgSyncFarmingResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_tx_pb.MsgSyncFarmingResponse>;
}
