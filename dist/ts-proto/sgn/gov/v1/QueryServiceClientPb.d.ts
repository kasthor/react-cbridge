/**
 * @fileoverview gRPC-Web generated client stub for sgn.gov.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_gov_v1_query_pb from '../../../sgn/gov/v1/query_pb';
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
    methodInfoProposal: grpcWeb.MethodDescriptor<sgn_gov_v1_query_pb.QueryProposalRequest, sgn_gov_v1_query_pb.QueryProposalResponse>;
    proposal(request: sgn_gov_v1_query_pb.QueryProposalRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_query_pb.QueryProposalResponse>;
    proposal(request: sgn_gov_v1_query_pb.QueryProposalRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_query_pb.QueryProposalResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_query_pb.QueryProposalResponse>;
    methodInfoProposals: grpcWeb.MethodDescriptor<sgn_gov_v1_query_pb.QueryProposalsRequest, sgn_gov_v1_query_pb.QueryProposalsResponse>;
    proposals(request: sgn_gov_v1_query_pb.QueryProposalsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_query_pb.QueryProposalsResponse>;
    proposals(request: sgn_gov_v1_query_pb.QueryProposalsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_query_pb.QueryProposalsResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_query_pb.QueryProposalsResponse>;
    methodInfoVote: grpcWeb.MethodDescriptor<sgn_gov_v1_query_pb.QueryVoteRequest, sgn_gov_v1_query_pb.QueryVoteResponse>;
    vote(request: sgn_gov_v1_query_pb.QueryVoteRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_query_pb.QueryVoteResponse>;
    vote(request: sgn_gov_v1_query_pb.QueryVoteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_query_pb.QueryVoteResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_query_pb.QueryVoteResponse>;
    methodInfoVotes: grpcWeb.MethodDescriptor<sgn_gov_v1_query_pb.QueryVotesRequest, sgn_gov_v1_query_pb.QueryVotesResponse>;
    votes(request: sgn_gov_v1_query_pb.QueryVotesRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_query_pb.QueryVotesResponse>;
    votes(request: sgn_gov_v1_query_pb.QueryVotesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_query_pb.QueryVotesResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_query_pb.QueryVotesResponse>;
    methodInfoParams: grpcWeb.MethodDescriptor<sgn_gov_v1_query_pb.QueryParamsRequest, sgn_gov_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_gov_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_query_pb.QueryParamsResponse>;
    params(request: sgn_gov_v1_query_pb.QueryParamsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_query_pb.QueryParamsResponse>;
    methodInfoDeposit: grpcWeb.MethodDescriptor<sgn_gov_v1_query_pb.QueryDepositRequest, sgn_gov_v1_query_pb.QueryDepositResponse>;
    deposit(request: sgn_gov_v1_query_pb.QueryDepositRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_query_pb.QueryDepositResponse>;
    deposit(request: sgn_gov_v1_query_pb.QueryDepositRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_query_pb.QueryDepositResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_query_pb.QueryDepositResponse>;
    methodInfoDeposits: grpcWeb.MethodDescriptor<sgn_gov_v1_query_pb.QueryDepositsRequest, sgn_gov_v1_query_pb.QueryDepositsResponse>;
    deposits(request: sgn_gov_v1_query_pb.QueryDepositsRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_query_pb.QueryDepositsResponse>;
    deposits(request: sgn_gov_v1_query_pb.QueryDepositsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_query_pb.QueryDepositsResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_query_pb.QueryDepositsResponse>;
    methodInfoTallyResult: grpcWeb.MethodDescriptor<sgn_gov_v1_query_pb.QueryTallyResultRequest, sgn_gov_v1_query_pb.QueryTallyResultResponse>;
    tallyResult(request: sgn_gov_v1_query_pb.QueryTallyResultRequest, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_query_pb.QueryTallyResultResponse>;
    tallyResult(request: sgn_gov_v1_query_pb.QueryTallyResultRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_query_pb.QueryTallyResultResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_query_pb.QueryTallyResultResponse>;
}
