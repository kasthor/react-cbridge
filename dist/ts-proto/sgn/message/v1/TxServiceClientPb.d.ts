/**
 * @fileoverview gRPC-Web generated client stub for sgn.message.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_message_v1_tx_pb from '../../../sgn/message/v1/tx_pb';
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
    methodInfoSignMessage: grpcWeb.MethodDescriptor<sgn_message_v1_tx_pb.MsgSignMessage, sgn_message_v1_tx_pb.MsgSignMessageResponse>;
    signMessage(request: sgn_message_v1_tx_pb.MsgSignMessage, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_tx_pb.MsgSignMessageResponse>;
    signMessage(request: sgn_message_v1_tx_pb.MsgSignMessage, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_tx_pb.MsgSignMessageResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_tx_pb.MsgSignMessageResponse>;
    methodInfoTriggerSignMessage: grpcWeb.MethodDescriptor<sgn_message_v1_tx_pb.MsgTriggerSignMessage, sgn_message_v1_tx_pb.MsgTriggerSignMessageResponse>;
    triggerSignMessage(request: sgn_message_v1_tx_pb.MsgTriggerSignMessage, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_tx_pb.MsgTriggerSignMessageResponse>;
    triggerSignMessage(request: sgn_message_v1_tx_pb.MsgTriggerSignMessage, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_tx_pb.MsgTriggerSignMessageResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_tx_pb.MsgTriggerSignMessageResponse>;
    methodInfoClaimAllFees: grpcWeb.MethodDescriptor<sgn_message_v1_tx_pb.MsgClaimAllFees, sgn_message_v1_tx_pb.MsgClaimAllFeesResponse>;
    claimAllFees(request: sgn_message_v1_tx_pb.MsgClaimAllFees, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_tx_pb.MsgClaimAllFeesResponse>;
    claimAllFees(request: sgn_message_v1_tx_pb.MsgClaimAllFees, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_tx_pb.MsgClaimAllFeesResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_tx_pb.MsgClaimAllFeesResponse>;
}
