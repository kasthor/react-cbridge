/**
 * @fileoverview gRPC-Web generated client stub for sgn.staking.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_staking_v1_query_pb from '../../../sgn/staking/v1/query_pb';
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
    methodInfoValidators: grpcWeb.MethodDescriptor<sgn_staking_v1_query_pb.QueryValidatorsRequest, sgn_staking_v1_query_pb.QueryValidatorsResponse>;
    validators(request: sgn_staking_v1_query_pb.QueryValidatorsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_staking_v1_query_pb.QueryValidatorsResponse>;
    validators(request: sgn_staking_v1_query_pb.QueryValidatorsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_staking_v1_query_pb.QueryValidatorsResponse) => void): grpcWeb.ClientReadableStream<sgn_staking_v1_query_pb.QueryValidatorsResponse>;
    methodInfoValidator: grpcWeb.MethodDescriptor<sgn_staking_v1_query_pb.QueryValidatorRequest, sgn_staking_v1_query_pb.QueryValidatorResponse>;
    validator(request: sgn_staking_v1_query_pb.QueryValidatorRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_staking_v1_query_pb.QueryValidatorResponse>;
    validator(request: sgn_staking_v1_query_pb.QueryValidatorRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_staking_v1_query_pb.QueryValidatorResponse) => void): grpcWeb.ClientReadableStream<sgn_staking_v1_query_pb.QueryValidatorResponse>;
    methodInfoValidatorDelegations: grpcWeb.MethodDescriptor<sgn_staking_v1_query_pb.QueryValidatorDelegationsRequest, sgn_staking_v1_query_pb.QueryValidatorDelegationsResponse>;
    validatorDelegations(request: sgn_staking_v1_query_pb.QueryValidatorDelegationsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_staking_v1_query_pb.QueryValidatorDelegationsResponse>;
    validatorDelegations(request: sgn_staking_v1_query_pb.QueryValidatorDelegationsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_staking_v1_query_pb.QueryValidatorDelegationsResponse) => void): grpcWeb.ClientReadableStream<sgn_staking_v1_query_pb.QueryValidatorDelegationsResponse>;
    methodInfoDelegation: grpcWeb.MethodDescriptor<sgn_staking_v1_query_pb.QueryDelegationRequest, sgn_staking_v1_query_pb.QueryDelegationResponse>;
    delegation(request: sgn_staking_v1_query_pb.QueryDelegationRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_staking_v1_query_pb.QueryDelegationResponse>;
    delegation(request: sgn_staking_v1_query_pb.QueryDelegationRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_staking_v1_query_pb.QueryDelegationResponse) => void): grpcWeb.ClientReadableStream<sgn_staking_v1_query_pb.QueryDelegationResponse>;
    methodInfoDelegatorDelegations: grpcWeb.MethodDescriptor<sgn_staking_v1_query_pb.QueryDelegatorDelegationsRequest, sgn_staking_v1_query_pb.QueryDelegatorDelegationsResponse>;
    delegatorDelegations(request: sgn_staking_v1_query_pb.QueryDelegatorDelegationsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_staking_v1_query_pb.QueryDelegatorDelegationsResponse>;
    delegatorDelegations(request: sgn_staking_v1_query_pb.QueryDelegatorDelegationsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_staking_v1_query_pb.QueryDelegatorDelegationsResponse) => void): grpcWeb.ClientReadableStream<sgn_staking_v1_query_pb.QueryDelegatorDelegationsResponse>;
    methodInfoDelegatorValidators: grpcWeb.MethodDescriptor<sgn_staking_v1_query_pb.QueryDelegatorValidatorsRequest, sgn_staking_v1_query_pb.QueryDelegatorValidatorsResponse>;
    delegatorValidators(request: sgn_staking_v1_query_pb.QueryDelegatorValidatorsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_staking_v1_query_pb.QueryDelegatorValidatorsResponse>;
    delegatorValidators(request: sgn_staking_v1_query_pb.QueryDelegatorValidatorsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_staking_v1_query_pb.QueryDelegatorValidatorsResponse) => void): grpcWeb.ClientReadableStream<sgn_staking_v1_query_pb.QueryDelegatorValidatorsResponse>;
    methodInfoDelegatorValidator: grpcWeb.MethodDescriptor<sgn_staking_v1_query_pb.QueryDelegatorValidatorRequest, sgn_staking_v1_query_pb.QueryDelegatorValidatorResponse>;
    delegatorValidator(request: sgn_staking_v1_query_pb.QueryDelegatorValidatorRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_staking_v1_query_pb.QueryDelegatorValidatorResponse>;
    delegatorValidator(request: sgn_staking_v1_query_pb.QueryDelegatorValidatorRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_staking_v1_query_pb.QueryDelegatorValidatorResponse) => void): grpcWeb.ClientReadableStream<sgn_staking_v1_query_pb.QueryDelegatorValidatorResponse>;
    methodInfoParams: grpcWeb.MethodDescriptor<sgn_staking_v1_query_pb.QueryParamsRequest, sgn_staking_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_staking_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_staking_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_staking_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_staking_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<sgn_staking_v1_query_pb.QueryParamsResponse>;
}
