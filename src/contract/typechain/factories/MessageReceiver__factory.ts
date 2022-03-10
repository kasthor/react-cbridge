/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MessageReceiver,
  MessageReceiverInterface,
} from "../MessageReceiver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum MessageReceiver.MsgType",
        name: "msgType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enum MessageReceiver.TxStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "srcChainId",
            type: "uint64",
          },
        ],
        internalType: "struct MessageReceiver.RouteInfo",
        name: "_route",
        type: "tuple",
      },
      {
        internalType: "bytes[]",
        name: "_sigs",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "executeMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "enum MessageReceiver.TransferType",
            name: "t",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "seqnum",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "srcChainId",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "refId",
            type: "bytes32",
          },
        ],
        internalType: "struct MessageReceiver.TransferInfo",
        name: "_transfer",
        type: "tuple",
      },
      {
        internalType: "bytes[]",
        name: "_sigs",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "executeMessageWithTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "executedMessages",
    outputs: [
      {
        internalType: "enum MessageReceiver.TxStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "executedTransfers",
    outputs: [
      {
        internalType: "enum MessageReceiver.TxStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityBridge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pegBridge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pegVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setLiquidityBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setPegBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setPegVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6117f38061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80639a9f76da1161008c578063cd2abd6611610066578063cd2abd66146101be578063d8257d17146101e1578063dfa2dbaf146101f4578063f2fde38b1461020757600080fd5b80639a9f76da146101685780639b05a77514610198578063a2232213146101ab57600080fd5b8063715018a6116100bd578063715018a61461011f57806382980dc4146101275780638da5cb5b1461015757600080fd5b806303cbfe66146100e4578063588be02b146100f9578063654317bf1461010c575b600080fd5b6100f76100f236600461115c565b61021a565b005b6100f761010736600461115c565b61029b565b6100f761011a36600461120c565b610317565b6100f761052c565b60035461013a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6000546001600160a01b031661013a565b61018b6101763660046112f8565b60016020526000908152604090205460ff1681565b60405161014e919061133b565b6100f76101a636600461115c565b610592565b6100f76101b936600461134f565b61060e565b61018b6101cc3660046112f8565b60026020526000908152604090205460ff1681565b60055461013a906001600160a01b031681565b60045461013a906001600160a01b031681565b6100f761021536600461115c565b610843565b6000546001600160a01b031633146102795760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146102f55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610270565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000610324888b8b610925565b90506000808281526002602052604090205460ff16600381111561034a5761034a611311565b146103975760405162461bcd60e51b815260206004820152601860248201527f6d65737361676520616c726561647920657865637574656400000000000000006044820152606401610270565b600046306040516020016103ed92919091825260601b6bffffffffffffffffffffffff191660208201527f4d657373616765000000000000000000000000000000000000000000000000006034820152603b0190565b60408051601f1981840301815282825280516020918201206003549184018190528383018690528251808503840181526060850193849052633416de1160e11b90935293506001600160a01b03169163682dbc229161045a918c908c908c908c908c908c9060640161150a565b60006040518083038186803b15801561047257600080fd5b505afa158015610486573d6000803e3d6000fd5b505050506000806104988b8e8e610989565b905080156104a957600191506104ae565b600291505b60008481526001602081905260409091208054849260ff19909116908360038111156104dc576104dc611311565b02179055507f29122f2c841ca2c3b2feefc4c23e90755d735d8e5b84f307151532e0f1ad62e76001858460405161051593929190611604565b60405180910390a150505050505050505050505050565b6000546001600160a01b031633146105865760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610270565b6105906000610a98565b565b6000546001600160a01b031633146105ec5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610270565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600061061988610ae8565b90506000808281526001602052604090205460ff16600381111561063f5761063f611311565b1461068c5760405162461bcd60e51b815260206004820152601960248201527f7472616e7366657220616c7265616479206578656375746564000000000000006044820152606401610270565b600046306040516020016106e292919091825260601b6bffffffffffffffffffffffff191660208201527f4d657373616765576974685472616e7366657200000000000000000000000000603482015260470190565b604051602081830303815290604052805190602001209050600360009054906101000a90046001600160a01b03166001600160a01b031663682dbc2282848e8e6040516020016107359493929190611636565b6040516020818303038152906040528a8a8a8a8a8a6040518863ffffffff1660e01b815260040161076c979695949392919061150a565b60006040518083038186803b15801561078457600080fd5b505afa158015610798573d6000803e3d6000fd5b505050506000806107aa8b8e8e61109c565b905080156107bb57600191506107dc565b6107c68b8e8e61110c565b905080156107d757600391506107dc565b600291505b60008481526001602081905260409091208054849260ff199091169083600381111561080a5761080a611311565b02179055507f29122f2c841ca2c3b2feefc4c23e90755d735d8e5b84f307151532e0f1ad62e76000858460405161051593929190611604565b6000546001600160a01b0316331461089d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610270565b6001600160a01b0381166109195760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610270565b61092281610a98565b50565b6000610934602085018561115c565b610944604086016020870161115c565b6109546060870160408801611657565b858560405160200161096a959493929190611681565b6040516020818303038152906040528051906020012090509392505050565b60008061099c604086016020870161115c565b6001600160a01b0316631599d26560e01b6109ba602088018861115c565b6109ca6060890160408a01611657565b87876040516024016109df94939291906116d2565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092529051610a4a919061170f565b6000604051808303816000865af19150503d8060008114610a87576040519150601f19603f3d011682016040523d82523d6000602084013e610a8c565b606091505b50909695505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080806001610afb602086018661172b565b6004811115610b0c57610b0c611311565b1415610cac57610b22604085016020860161115c565b610b32606086016040870161115c565b610b42608087016060880161115c565b6080870135610b5760e0890160c08a01611657565b6040516bffffffffffffffffffffffff19606096871b8116602083015294861b851660348201529290941b9092166048820152605c8101919091526001600160c01b031960c092831b8116607c8301524690921b909116608482015260e0850135608c82015260ac0160408051808303601f19018152908290528051602090910120600354633c64f04b60e01b8352600483018290529093506001600160a01b031691508190633c64f04b9060240160206040518083038186803b158015610c1e57600080fd5b505afa158015610c32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c56919061174c565b1515600114610ca75760405162461bcd60e51b815260206004820152601660248201527f6272696467652072656c6179206e6f74206578697374000000000000000000006044820152606401610270565b611056565b6002610cbb602086018661172b565b6004811115610ccc57610ccc611311565b1415610e3e5746610ce360c0860160a08701611657565b610cf3606087016040880161115c565b610d03608088016060890161115c565b6040516001600160c01b031960c095861b811660208301529390941b90921660288401526bffffffffffffffffffffffff19606091821b8116603085015291901b1660448201526080850135605882015260780160408051808303601f19018152908290528051602090910120600354631c13568560e31b8352600483018290529093506001600160a01b03169150819063e09ab4289060240160206040518083038186803b158015610db557600080fd5b505afa158015610dc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ded919061174c565b1515600114610ca75760405162461bcd60e51b815260206004820152601960248201527f627269646765207769746864726177206e6f74206578697374000000000000006044820152606401610270565b6003610e4d602086018661172b565b6004811115610e5e57610e5e611311565b1480610e8757506004610e74602086018661172b565b6004811115610e8557610e85611311565b145b1561105657610e9c606085016040860161115c565b610eac608086016060870161115c565b6080860135610ec1604088016020890161115c565b610ed160e0890160c08a01611657565b604051606095861b6bffffffffffffffffffffffff19908116602083015294861b851660348201526048810193909352931b909116606882015260c09190911b6001600160c01b031916607c82015260e0850135608482015260a40160408051601f19818403018152919052805160209091012091506003610f56602086018661172b565b6004811115610f6757610f67611311565b1415610f7f57506004546001600160a01b0316610f8d565b506005546001600160a01b03165b6040516301e6472560e01b8152600481018390526001600160a01b038216906301e647259060240160206040518083038186803b158015610fcd57600080fd5b505afa158015610fe1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611005919061174c565b15156001146110565760405162461bcd60e51b815260206004820152601460248201527f706567207265636f7264206e6f742065786973740000000000000000000000006044820152606401610270565b6040516bffffffffffffffffffffffff19606083901b1660208201526034810183905260540160408051601f198184030181529190528051602090910120949350505050565b6000806110af606086016040870161115c565b6001600160a01b031663671aeecd60e11b6110d0604088016020890161115c565b6110e06080890160608a0161115c565b60808901356110f560e08b0160c08c01611657565b89896040516024016109df9695949392919061176e565b60008061111f606086016040870161115c565b6001600160a01b03166378079ce760e11b6110d0604088016020890161115c565b80356001600160a01b038116811461115757600080fd5b919050565b60006020828403121561116e57600080fd5b61117782611140565b9392505050565b60008083601f84011261119057600080fd5b50813567ffffffffffffffff8111156111a857600080fd5b6020830191508360208285010111156111c057600080fd5b9250929050565b60008083601f8401126111d957600080fd5b50813567ffffffffffffffff8111156111f157600080fd5b6020830191508360208260051b85010111156111c057600080fd5b6000806000806000806000806000898b0360e081121561122b57600080fd5b8a3567ffffffffffffffff8082111561124357600080fd5b61124f8e838f0161117e565b909c509a508a91506060601f198401121561126957600080fd5b60208d01995060808d013592508083111561128357600080fd5b61128f8e848f016111c7565b909950975060a08d01359250889150808311156112ab57600080fd5b6112b78e848f016111c7565b909750955060c08d01359250869150808311156112d357600080fd5b50506112e18c828d016111c7565b915080935050809150509295985092959850929598565b60006020828403121561130a57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6004811061133757611337611311565b9052565b602081016113498284611327565b92915050565b6000806000806000806000806000898b0361018081121561136f57600080fd5b8a3567ffffffffffffffff8082111561138757600080fd5b6113938e838f0161117e565b909c509a508a9150610100601f19840112156113ae57600080fd5b60208d0199506101208d01359250808311156113c957600080fd5b6113d58e848f016111c7565b90995097506101408d01359250889150808311156113f257600080fd5b6113fe8e848f016111c7565b90975095506101608d01359250869150808311156112d357600080fd5b60005b8381101561143657818101518382015260200161141e565b83811115611445576000848401525b50505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8183526000602080850194508260005b858110156114b0576001600160a01b0361149d83611140565b1687529582019590820190600101611484565b509495945050505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156114ed57600080fd5b8260051b8083602087013760009401602001938452509192915050565b60808152600088518060808401526115298160a0850160208d0161141b565b601f01601f1916820182810360a090810160208501528101889052600588901b810160c09081019082018a60005b8b8110156115ca5784840360bf190183528135368e9003601e1901811261157d57600080fd5b8d01803567ffffffffffffffff81111561159657600080fd5b8036038f13156115a557600080fd5b6115b386826020850161144b565b955050506020928301929190910190600101611557565b50505083810360408501526115e081888a611474565b91505082810360608401526115f68185876114bb565b9a9950505050505050505050565b606081016002851061161857611618611311565b84825283602083015261162e6040830184611327565b949350505050565b84815283602082015281836040830137600091016040019081529392505050565b60006020828403121561166957600080fd5b813567ffffffffffffffff8116811461117757600080fd5b60006bffffffffffffffffffffffff19808860601b168352808760601b166014840152506001600160c01b03198560c01b166028830152828460308401375060009101603001908152949350505050565b6001600160a01b038516815267ffffffffffffffff8416602082015260606040820152600061170560608301848661144b565b9695505050505050565b6000825161172181846020870161141b565b9190910192915050565b60006020828403121561173d57600080fd5b81356005811061117757600080fd5b60006020828403121561175e57600080fd5b8151801515811461117757600080fd5b60006001600160a01b03808916835280881660208401525085604083015267ffffffffffffffff8516606083015260a060808301526117b160a08301848661144b565b9897505050505050505056fea264697066735822122039bfdddd6ab60b743f38b49df239eed4eec8800c17128cba123ecd3fa04b038b64736f6c63430008090033";

export class MessageReceiver__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MessageReceiver> {
    return super.deploy(overrides || {}) as Promise<MessageReceiver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MessageReceiver {
    return super.attach(address) as MessageReceiver;
  }
  connect(signer: Signer): MessageReceiver__factory {
    return super.connect(signer) as MessageReceiver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessageReceiverInterface {
    return new utils.Interface(_abi) as MessageReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MessageReceiver {
    return new Contract(address, _abi, signerOrProvider) as MessageReceiver;
  }
}
