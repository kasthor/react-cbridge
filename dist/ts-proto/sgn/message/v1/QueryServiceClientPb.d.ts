/**
 * @fileoverview gRPC-Web generated client stub for sgn.message.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_message_v1_query_pb from '../../../sgn/message/v1/query_pb';
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
    methodInfoParams: grpcWeb.MethodDescriptor<sgn_message_v1_query_pb.QueryParamsRequest, sgn_message_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_message_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_message_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_query_pb.QueryParamsResponse>;
    methodInfoExecutionContexts: grpcWeb.MethodDescriptor<sgn_message_v1_query_pb.QueryExecutionContextsRequest, sgn_message_v1_query_pb.QueryExecutionContextsResponse>;
    executionContexts(request: sgn_message_v1_query_pb.QueryExecutionContextsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_query_pb.QueryExecutionContextsResponse>;
    executionContexts(request: sgn_message_v1_query_pb.QueryExecutionContextsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_query_pb.QueryExecutionContextsResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_query_pb.QueryExecutionContextsResponse>;
    methodInfoMessage: grpcWeb.MethodDescriptor<sgn_message_v1_query_pb.QueryMessageRequest, sgn_message_v1_query_pb.QueryMessageResponse>;
    message(request: sgn_message_v1_query_pb.QueryMessageRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_query_pb.QueryMessageResponse>;
    message(request: sgn_message_v1_query_pb.QueryMessageRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_query_pb.QueryMessageResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_query_pb.QueryMessageResponse>;
    methodInfoMessageExists: grpcWeb.MethodDescriptor<sgn_message_v1_query_pb.QueryMessageExistsRequest, sgn_message_v1_query_pb.QueryMessageExistsResponse>;
    messageExists(request: sgn_message_v1_query_pb.QueryMessageExistsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_query_pb.QueryMessageExistsResponse>;
    messageExists(request: sgn_message_v1_query_pb.QueryMessageExistsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_query_pb.QueryMessageExistsResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_query_pb.QueryMessageExistsResponse>;
    methodInfoIsMessageActive: grpcWeb.MethodDescriptor<sgn_message_v1_query_pb.IsMessageActiveRequest, sgn_message_v1_query_pb.IsMessageActiveResponse>;
    isMessageActive(request: sgn_message_v1_query_pb.IsMessageActiveRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_query_pb.IsMessageActiveResponse>;
    isMessageActive(request: sgn_message_v1_query_pb.IsMessageActiveRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_query_pb.IsMessageActiveResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_query_pb.IsMessageActiveResponse>;
    methodInfoRefundExists: grpcWeb.MethodDescriptor<sgn_message_v1_query_pb.QueryRefundExistsRequest, sgn_message_v1_query_pb.QueryRefundExistsResponse>;
    refundExists(request: sgn_message_v1_query_pb.QueryRefundExistsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_query_pb.QueryRefundExistsResponse>;
    refundExists(request: sgn_message_v1_query_pb.QueryRefundExistsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_query_pb.QueryRefundExistsResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_query_pb.QueryRefundExistsResponse>;
    methodInfoTransfer: grpcWeb.MethodDescriptor<sgn_message_v1_query_pb.QueryTransferRequest, sgn_message_v1_query_pb.QueryTransferResponse>;
    transfer(request: sgn_message_v1_query_pb.QueryTransferRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_query_pb.QueryTransferResponse>;
    transfer(request: sgn_message_v1_query_pb.QueryTransferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_query_pb.QueryTransferResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_query_pb.QueryTransferResponse>;
    methodInfoMessageBus: grpcWeb.MethodDescriptor<sgn_message_v1_query_pb.QueryMessageBusRequest, sgn_message_v1_query_pb.QueryMessageBusResponse>;
    messageBus(request: sgn_message_v1_query_pb.QueryMessageBusRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_query_pb.QueryMessageBusResponse>;
    messageBus(request: sgn_message_v1_query_pb.QueryMessageBusRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_query_pb.QueryMessageBusResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_query_pb.QueryMessageBusResponse>;
    methodInfoFeeClaimInfo: grpcWeb.MethodDescriptor<sgn_message_v1_query_pb.QueryFeeClaimInfoRequest, sgn_message_v1_query_pb.QueryFeeClaimInfoResponse>;
    feeClaimInfo(request: sgn_message_v1_query_pb.QueryFeeClaimInfoRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_message_v1_query_pb.QueryFeeClaimInfoResponse>;
    feeClaimInfo(request: sgn_message_v1_query_pb.QueryFeeClaimInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_message_v1_query_pb.QueryFeeClaimInfoResponse) => void): grpcWeb.ClientReadableStream<sgn_message_v1_query_pb.QueryFeeClaimInfoResponse>;
}
