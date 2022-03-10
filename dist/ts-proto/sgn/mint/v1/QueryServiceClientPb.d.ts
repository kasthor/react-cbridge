/**
 * @fileoverview gRPC-Web generated client stub for sgn.mint.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_mint_v1_query_pb from '../../../sgn/mint/v1/query_pb';
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
    methodInfoParams: grpcWeb.MethodDescriptor<sgn_mint_v1_query_pb.QueryParamsRequest, sgn_mint_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_mint_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_mint_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_mint_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_mint_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<sgn_mint_v1_query_pb.QueryParamsResponse>;
    methodInfoAnnualProvisions: grpcWeb.MethodDescriptor<sgn_mint_v1_query_pb.QueryAnnualProvisionsRequest, sgn_mint_v1_query_pb.QueryAnnualProvisionsResponse>;
    annualProvisions(request: sgn_mint_v1_query_pb.QueryAnnualProvisionsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_mint_v1_query_pb.QueryAnnualProvisionsResponse>;
    annualProvisions(request: sgn_mint_v1_query_pb.QueryAnnualProvisionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_mint_v1_query_pb.QueryAnnualProvisionsResponse) => void): grpcWeb.ClientReadableStream<sgn_mint_v1_query_pb.QueryAnnualProvisionsResponse>;
}
