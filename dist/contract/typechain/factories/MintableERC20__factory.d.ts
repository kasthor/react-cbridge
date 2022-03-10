import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MintableERC20, MintableERC20Interface } from "../MintableERC20";
export declare class MintableERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name_: string, symbol_: string, decimals_: BigNumberish, initialSupply_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MintableERC20>;
    getDeployTransaction(name_: string, symbol_: string, decimals_: BigNumberish, initialSupply_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MintableERC20;
    connect(signer: Signer): MintableERC20__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620013913803806200139183398101604081905262000034916200035f565b8351849084906200004d906003906020850190620001ec565b50805162000063906004906020840190620001ec565b505050620000806200007a620000ae60201b60201c565b620000b2565b6005805460ff60a01b1916600160a01b60ff851602179055620000a4338262000104565b505050506200044e565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166200015f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001739190620003ea565b90915550506001600160a01b03821660009081526020819052604081208054839290620001a2908490620003ea565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001fa9062000411565b90600052602060002090601f0160209004810192826200021e576000855562000269565b82601f106200023957805160ff191683800117855562000269565b8280016001018555821562000269579182015b82811115620002695782518255916020019190600101906200024c565b50620002779291506200027b565b5090565b5b808211156200027757600081556001016200027c565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620002ba57600080fd5b81516001600160401b0380821115620002d757620002d762000292565b604051601f8301601f19908116603f0116810190828211818310171562000302576200030262000292565b816040528381526020925086838588010111156200031f57600080fd5b600091505b8382101562000343578582018301518183018401529082019062000324565b83821115620003555760008385830101525b9695505050505050565b600080600080608085870312156200037657600080fd5b84516001600160401b03808211156200038e57600080fd5b6200039c88838901620002a8565b95506020870151915080821115620003b357600080fd5b50620003c287828801620002a8565b935050604085015160ff81168114620003da57600080fd5b6060959095015193969295505050565b600082198211156200040c57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200042657607f821691505b602082108114156200044857634e487b7160e01b600052602260045260246000fd5b50919050565b610f33806200045e6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806370a08231116100b257806395d89b4111610081578063a9059cbb11610066578063a9059cbb1461026b578063dd62ed3e1461027e578063f2fde38b146102b757600080fd5b806395d89b4114610250578063a457c2d71461025857600080fd5b806370a08231146101f1578063715018a61461021a57806379cc6790146102225780638da5cb5b1461023557600080fd5b8063313ce567116100ee578063313ce5671461018657806339509351146101b657806340c10f19146101c957806342966c68146101de57600080fd5b806306fdde0314610120578063095ea7b31461013e57806318160ddd1461016157806323b872dd14610173575b600080fd5b6101286102ca565b6040516101359190610d38565b60405180910390f35b61015161014c366004610da9565b61035c565b6040519015158152602001610135565b6002545b604051908152602001610135565b610151610181366004610dd3565b610372565b60055474010000000000000000000000000000000000000000900460ff1660405160ff9091168152602001610135565b6101516101c4366004610da9565b610436565b6101dc6101d7366004610da9565b610472565b005b6101dc6101ec366004610e0f565b6104da565b6101656101ff366004610e28565b6001600160a01b031660009081526020819052604090205490565b6101dc6104e7565b6101dc610230366004610da9565b61054d565b6005546040516001600160a01b039091168152602001610135565b6101286105d3565b610151610266366004610da9565b6105e2565b610151610279366004610da9565b610693565b61016561028c366004610e4a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101dc6102c5366004610e28565b6106a0565b6060600380546102d990610e7d565b80601f016020809104026020016040519081016040528092919081815260200182805461030590610e7d565b80156103525780601f1061032757610100808354040283529160200191610352565b820191906000526020600020905b81548152906001019060200180831161033557829003601f168201915b5050505050905090565b600061036933848461077f565b50600192915050565b600061037f8484846108a3565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561041e5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61042b853385840361077f565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161036991859061046d908690610ece565b61077f565b6005546001600160a01b031633146104cc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610415565b6104d68282610aa1565b5050565b6104e43382610b80565b50565b6005546001600160a01b031633146105415760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610415565b61054b6000610cce565b565b6000610559833361028c565b9050818110156105b75760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b6064820152608401610415565b6105c4833384840361077f565b6105ce8383610b80565b505050565b6060600480546102d990610e7d565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561067c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610415565b610689338585840361077f565b5060019392505050565b60006103693384846108a3565b6005546001600160a01b031633146106fa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610415565b6001600160a01b0381166107765760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610415565b6104e481610cce565b6001600160a01b0383166107e15760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610415565b6001600160a01b0382166108425760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610415565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661091f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610415565b6001600160a01b0382166109815760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610415565b6001600160a01b03831660009081526020819052604090205481811015610a105760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610415565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610a47908490610ece565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a9391815260200190565b60405180910390a350505050565b6001600160a01b038216610af75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610415565b8060026000828254610b099190610ece565b90915550506001600160a01b03821660009081526020819052604081208054839290610b36908490610ece565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610be05760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610415565b6001600160a01b03821660009081526020819052604090205481811015610c545760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610415565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610c83908490610ee6565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208083528351808285015260005b81811015610d6557858101830151858201604001528201610d49565b81811115610d77576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610da457600080fd5b919050565b60008060408385031215610dbc57600080fd5b610dc583610d8d565b946020939093013593505050565b600080600060608486031215610de857600080fd5b610df184610d8d565b9250610dff60208501610d8d565b9150604084013590509250925092565b600060208284031215610e2157600080fd5b5035919050565b600060208284031215610e3a57600080fd5b610e4382610d8d565b9392505050565b60008060408385031215610e5d57600080fd5b610e6683610d8d565b9150610e7460208401610d8d565b90509250929050565b600181811c90821680610e9157607f821691505b60208210811415610eb257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610ee157610ee1610eb8565b500190565b600082821015610ef857610ef8610eb8565b50039056fea2646970667358221220309d5b011b4ca409a4495b282d11e7ee055f84df0d8a0d25327b3bbcc97164d764736f6c63430008090033";
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
    static createInterface(): MintableERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MintableERC20;
}
