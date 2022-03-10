/**
 * @fileoverview gRPC-Web generated client stub for sgn.pegbridge.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_pegbridge_v1_tx_pb from '../../../sgn/pegbridge/v1/tx_pb';
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
    methodInfoSignMint: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_tx_pb.MsgSignMint, sgn_pegbridge_v1_tx_pb.MsgSignMintResponse>;
    signMint(request: sgn_pegbridge_v1_tx_pb.MsgSignMint, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_tx_pb.MsgSignMintResponse>;
    signMint(request: sgn_pegbridge_v1_tx_pb.MsgSignMint, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_tx_pb.MsgSignMintResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_tx_pb.MsgSignMintResponse>;
    methodInfoSignWithdraw: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_tx_pb.MsgSignWithdraw, sgn_pegbridge_v1_tx_pb.MsgSignWithdrawResponse>;
    signWithdraw(request: sgn_pegbridge_v1_tx_pb.MsgSignWithdraw, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_tx_pb.MsgSignWithdrawResponse>;
    signWithdraw(request: sgn_pegbridge_v1_tx_pb.MsgSignWithdraw, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_tx_pb.MsgSignWithdrawResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_tx_pb.MsgSignWithdrawResponse>;
    methodInfoTriggerSignMint: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_tx_pb.MsgTriggerSignMint, sgn_pegbridge_v1_tx_pb.MsgTriggerSignMintResponse>;
    triggerSignMint(request: sgn_pegbridge_v1_tx_pb.MsgTriggerSignMint, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_tx_pb.MsgTriggerSignMintResponse>;
    triggerSignMint(request: sgn_pegbridge_v1_tx_pb.MsgTriggerSignMint, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_tx_pb.MsgTriggerSignMintResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_tx_pb.MsgTriggerSignMintResponse>;
    methodInfoTriggerSignWithdraw: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_tx_pb.MsgTriggerSignWithdraw, sgn_pegbridge_v1_tx_pb.MsgTriggerSignWithdrawResponse>;
    triggerSignWithdraw(request: sgn_pegbridge_v1_tx_pb.MsgTriggerSignWithdraw, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_tx_pb.MsgTriggerSignWithdrawResponse>;
    triggerSignWithdraw(request: sgn_pegbridge_v1_tx_pb.MsgTriggerSignWithdraw, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_tx_pb.MsgTriggerSignWithdrawResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_tx_pb.MsgTriggerSignWithdrawResponse>;
    methodInfoClaimFee: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_tx_pb.MsgClaimFee, sgn_pegbridge_v1_tx_pb.MsgClaimFeeResponse>;
    claimFee(request: sgn_pegbridge_v1_tx_pb.MsgClaimFee, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_tx_pb.MsgClaimFeeResponse>;
    claimFee(request: sgn_pegbridge_v1_tx_pb.MsgClaimFee, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_tx_pb.MsgClaimFeeResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_tx_pb.MsgClaimFeeResponse>;
    methodInfoClaimRefund: grpcWeb.MethodDescriptor<sgn_pegbridge_v1_tx_pb.MsgClaimRefund, sgn_pegbridge_v1_tx_pb.MsgClaimRefundResponse>;
    claimRefund(request: sgn_pegbridge_v1_tx_pb.MsgClaimRefund, metadata: grpcWeb.Metadata | null): Promise<sgn_pegbridge_v1_tx_pb.MsgClaimRefundResponse>;
    claimRefund(request: sgn_pegbridge_v1_tx_pb.MsgClaimRefund, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_pegbridge_v1_tx_pb.MsgClaimRefundResponse) => void): grpcWeb.ClientReadableStream<sgn_pegbridge_v1_tx_pb.MsgClaimRefundResponse>;
}
