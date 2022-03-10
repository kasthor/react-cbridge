import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MintSwapCanonicalToken, MintSwapCanonicalTokenInterface } from "../MintSwapCanonicalToken";
export declare class MintSwapCanonicalToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name_: string, symbol_: string, decimals_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MintSwapCanonicalToken>;
    getDeployTransaction(name_: string, symbol_: string, decimals_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MintSwapCanonicalToken;
    connect(signer: Signer): MintSwapCanonicalToken__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162001a5938038062001a5983398101604081905262000034916200025f565b8282828282816003908051906020019062000051929190620000ec565b50805162000067906004906020840190620000ec565b505050620000846200007e6200009660201b60201c565b6200009a565b60ff1660805250620003219350505050565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000fa90620002e4565b90600052602060002090601f0160209004810192826200011e576000855562000169565b82601f106200013957805160ff191683800117855562000169565b8280016001018555821562000169579182015b82811115620001695782518255916020019190600101906200014c565b50620001779291506200017b565b5090565b5b808211156200017757600081556001016200017c565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001ba57600080fd5b81516001600160401b0380821115620001d757620001d762000192565b604051601f8301601f19908116603f0116810190828211818310171562000202576200020262000192565b816040528381526020925086838588010111156200021f57600080fd5b600091505b8382101562000243578582018301518183018401529082019062000224565b83821115620002555760008385830101525b9695505050505050565b6000806000606084860312156200027557600080fd5b83516001600160401b03808211156200028d57600080fd5b6200029b87838801620001a8565b94506020860151915080821115620002b257600080fd5b50620002c186828701620001a8565b925050604084015160ff81168114620002d957600080fd5b809150509250925092565b600181811c90821680620002f957607f821691505b602082108114156200031b57634e487b7160e01b600052602260045260246000fd5b50919050565b60805161171c6200033d6000396000610216015261171c6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c8063715018a6116100e3578063a9059cbb1161008c578063dd62ed3e11610066578063dd62ed3e14610394578063f2fde38b146103cd578063f716932e146103e057600080fd5b8063a9059cbb14610347578063cd0461191461035a578063ced67f0c1461036d57600080fd5b806395d89b41116100bd57806395d89b41146103195780639dc29fac14610321578063a457c2d71461033457600080fd5b8063715018a6146102e0578063893d20e8146102e85780638da5cb5b1461030857600080fd5b8063313ce5671161014557806340c10f191161011f57806340c10f191461028f5780634ce2f71a146102a257806370a08231146102b757600080fd5b8063313ce5671461020f57806334faea1b14610240578063395093511461027c57600080fd5b806313f1a4a41161017657806313f1a4a4146101d357806318160ddd146101f457806323b872dd146101fc57600080fd5b806306fdde0314610192578063095ea7b3146101b0575b600080fd5b61019a6103f3565b6040516101a79190611525565b60405180910390f35b6101c36101be366004611574565b610485565b60405190151581526020016101a7565b6101e66101e1366004611574565b61049b565b6040519081526020016101a7565b6002546101e6565b6101c361020a36600461159e565b610546565b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101a7565b61026761024e3660046115da565b6007602052600090815260409020805460019091015482565b604080519283526020830191909152016101a7565b6101c361028a366004611574565b610607565b6101c361029d366004611574565b610643565b6102b56102b0366004611574565b610713565b005b6101e66102c53660046115da565b6001600160a01b031660009081526020819052604090205490565b6102b56107c6565b6102f061082c565b6040516001600160a01b0390911681526020016101a7565b6005546001600160a01b03166102f0565b61019a610845565b6101c361032f366004611574565b610854565b6101c3610342366004611574565b6108c6565b6101c3610355366004611574565b61096d565b6102b5610368366004611574565b61097a565b61026761037b3660046115da565b6006602052600090815260409020805460019091015482565b6101e66103a23660046115f5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102b56103db3660046115da565b610a25565b6101e66103ee366004611574565b610b07565b60606003805461040290611628565b80601f016020809104026020016040519081016040528092919081815260200182805461042e90611628565b801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b5050505050905090565b6000610492338484610c05565b50600192915050565b6001600160a01b038216600090815260076020526040812080546105065760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642062726964676520746f6b656e00000000000000000000000060448201526064015b60405180910390fd5b8281600101600082825461051a9190611679565b9091555061052a90503384610d2a565b61053e6001600160a01b0385163385610e75565b509092915050565b6000610553848484610f05565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156105ed5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084016104fd565b6105fa8533858403610c05565b60019150505b9392505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161049291859061063e908690611690565b610c05565b33600090815260066020526040812080546106915760405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b21031b0b63632b960911b60448201526064016104fd565b828160010160008282546106a59190611690565b90915550508054600182015411156106ff5760405162461bcd60e51b815260206004820152601960248201527f657863656564732062726964676520737570706c79206361700000000000000060448201526064016104fd565b6107098484611104565b5060019392505050565b6005546001600160a01b0316331461076d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104fd565b6001600160a01b038216600081815260066020908152604091829020849055815192835282018390527f59e1e4348943de408b89af8ab71e502ea722dd41efd1ff4a3548c60e83e91c6091015b60405180910390a15050565b6005546001600160a01b031633146108205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104fd565b61082a60006111e3565b565b60006108406005546001600160a01b031690565b905090565b60606004805461040290611628565b33600090815260066020526040812080546108a25760405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b21031b0b63632b960911b60448201526064016104fd565b828160010160008282546108b69190611679565b9091555061070990508484610d2a565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156109605760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016104fd565b6107093385858403610c05565b6000610492338484610f05565b6005546001600160a01b031633146109d45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104fd565b6001600160a01b038216600081815260076020908152604091829020849055815192835282018390527f51c7b3899924578d835c066303e3f765c25fea17d7b18840cd109a90f5c5601f91016107ba565b6005546001600160a01b03163314610a7f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104fd565b6001600160a01b038116610afb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104fd565b610b04816111e3565b50565b6001600160a01b03821660009081526007602052604081208054610b6d5760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642062726964676520746f6b656e00000000000000000000000060448201526064016104fd565b80546001820154610b7f908590611690565b10610bcc5760405162461bcd60e51b815260206004820152600f60248201527f657863656564207377617020636170000000000000000000000000000000000060448201526064016104fd565b82816001016000828254610be09190611690565b90915550610bf090503384611104565b61053e6001600160a01b03851633308661124d565b6001600160a01b038316610c675760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104fd565b6001600160a01b038216610cc85760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104fd565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038216610d8a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104fd565b6001600160a01b03821660009081526020819052604090205481811015610dfe5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104fd565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610e2d908490611679565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610d1d565b505050565b6040516001600160a01b038316602482015260448101829052610e7090849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611285565b6001600160a01b038316610f815760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104fd565b6001600160a01b038216610fe35760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104fd565b6001600160a01b038316600090815260208190526040902054818110156110725760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016104fd565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906110a9908490611690565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110f591815260200190565b60405180910390a35b50505050565b6001600160a01b03821661115a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104fd565b806002600082825461116c9190611690565b90915550506001600160a01b03821660009081526020819052604081208054839290611199908490611690565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040516001600160a01b03808516602483015283166044820152606481018290526110fe9085906323b872dd60e01b90608401610ea1565b60006112da826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661136a9092919063ffffffff16565b805190915015610e7057808060200190518101906112f891906116a8565b610e705760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104fd565b60606113798484600085611381565b949350505050565b6060824710156113f95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104fd565b843b6114475760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104fd565b600080866001600160a01b0316858760405161146391906116ca565b60006040518083038185875af1925050503d80600081146114a0576040519150601f19603f3d011682016040523d82523d6000602084013e6114a5565b606091505b50915091506114b58282866114c0565b979650505050505050565b606083156114cf575081610600565b8251156114df5782518084602001fd5b8160405162461bcd60e51b81526004016104fd9190611525565b60005b838110156115145781810151838201526020016114fc565b838111156110fe5750506000910152565b60208152600082518060208401526115448160408501602087016114f9565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461156f57600080fd5b919050565b6000806040838503121561158757600080fd5b61159083611558565b946020939093013593505050565b6000806000606084860312156115b357600080fd5b6115bc84611558565b92506115ca60208501611558565b9150604084013590509250925092565b6000602082840312156115ec57600080fd5b61060082611558565b6000806040838503121561160857600080fd5b61161183611558565b915061161f60208401611558565b90509250929050565b600181811c9082168061163c57607f821691505b6020821081141561165d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561168b5761168b611663565b500390565b600082198211156116a3576116a3611663565b500190565b6000602082840312156116ba57600080fd5b8151801515811461060057600080fd5b600082516116dc8184602087016114f9565b919091019291505056fea26469706673582212206a0604e01899bd9ed74fc432838ff97d1506c0cf31b0af8c8405459ea18fe06864736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MintSwapCanonicalTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MintSwapCanonicalToken;
}
