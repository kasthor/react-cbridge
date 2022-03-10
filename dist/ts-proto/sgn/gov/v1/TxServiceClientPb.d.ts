/**
 * @fileoverview gRPC-Web generated client stub for sgn.gov.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as sgn_gov_v1_tx_pb from '../../../sgn/gov/v1/tx_pb';
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
    methodInfoSubmitProposal: grpcWeb.MethodDescriptor<sgn_gov_v1_tx_pb.MsgSubmitProposal, sgn_gov_v1_tx_pb.MsgSubmitProposalResponse>;
    submitProposal(request: sgn_gov_v1_tx_pb.MsgSubmitProposal, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_tx_pb.MsgSubmitProposalResponse>;
    submitProposal(request: sgn_gov_v1_tx_pb.MsgSubmitProposal, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_tx_pb.MsgSubmitProposalResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_tx_pb.MsgSubmitProposalResponse>;
    methodInfoVote: grpcWeb.MethodDescriptor<sgn_gov_v1_tx_pb.MsgVote, sgn_gov_v1_tx_pb.MsgVoteResponse>;
    vote(request: sgn_gov_v1_tx_pb.MsgVote, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_tx_pb.MsgVoteResponse>;
    vote(request: sgn_gov_v1_tx_pb.MsgVote, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_tx_pb.MsgVoteResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_tx_pb.MsgVoteResponse>;
    methodInfoDeposit: grpcWeb.MethodDescriptor<sgn_gov_v1_tx_pb.MsgDeposit, sgn_gov_v1_tx_pb.MsgDepositResponse>;
    deposit(request: sgn_gov_v1_tx_pb.MsgDeposit, metadata: grpcWeb.Metadata | null): Promise<sgn_gov_v1_tx_pb.MsgDepositResponse>;
    deposit(request: sgn_gov_v1_tx_pb.MsgDeposit, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: sgn_gov_v1_tx_pb.MsgDepositResponse) => void): grpcWeb.ClientReadableStream<sgn_gov_v1_tx_pb.MsgDepositResponse>;
}
