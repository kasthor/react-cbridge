import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PeggedToken, PeggedTokenInterface } from "../PeggedToken";
export declare class PeggedToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name_: string, symbol_: string, decimals_: BigNumberish, _controller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PeggedToken>;
    getDeployTransaction(name_: string, symbol_: string, decimals_: BigNumberish, _controller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PeggedToken;
    connect(signer: Signer): PeggedToken__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001042380380620010428339810160408190526200003491620001f6565b8351849084906200004d90600390602085019062000083565b5080516200006390600490602084019062000083565b50505060ff90911660a0526001600160a01b031660805250620002d79050565b82805462000091906200029a565b90600052602060002090601f016020900481019282620000b5576000855562000100565b82601f10620000d057805160ff191683800117855562000100565b8280016001018555821562000100579182015b8281111562000100578251825591602001919060010190620000e3565b506200010e92915062000112565b5090565b5b808211156200010e576000815560010162000113565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200015157600080fd5b81516001600160401b03808211156200016e576200016e62000129565b604051601f8301601f19908116603f0116810190828211818310171562000199576200019962000129565b81604052838152602092508683858801011115620001b657600080fd5b600091505b83821015620001da5785820183015181830184015290820190620001bb565b83821115620001ec5760008385830101525b9695505050505050565b600080600080608085870312156200020d57600080fd5b84516001600160401b03808211156200022557600080fd5b62000233888389016200013f565b955060208701519150808211156200024a57600080fd5b5062000259878288016200013f565b935050604085015160ff811681146200027157600080fd5b60608601519092506001600160a01b03811681146200028f57600080fd5b939692955090935050565b600181811c90821680620002af57607f821691505b60208210811415620002d157634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a051610d376200030b600039600061015c0152600081816102560152818161044301526104d80152610d376000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d7146101f2578063a9059cbb14610205578063dd62ed3e14610218578063f77c47911461025157600080fd5b806370a08231146101ae57806395d89b41146101d75780639dc29fac146101df57600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce56714610155578063395093511461018657806340c10f191461019957600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f7610290565b6040516101049190610b55565b60405180910390f35b61012061011b366004610bc6565b610322565b6040519015158152602001610104565b6002545b604051908152602001610104565b610120610150366004610bf0565b610338565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610104565b610120610194366004610bc6565b6103fc565b6101ac6101a7366004610bc6565b610438565b005b6101346101bc366004610c2c565b6001600160a01b031660009081526020819052604090205490565b6100f76104be565b6101ac6101ed366004610bc6565b6104cd565b610120610200366004610bc6565b61054f565b610120610213366004610bc6565b610600565b610134610226366004610c4e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102787f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610104565b60606003805461029f90610c81565b80601f01602080910402602001604051908101604052809291908181526020018280546102cb90610c81565b80156103185780601f106102ed57610100808354040283529160200191610318565b820191906000526020600020905b8154815290600101906020018083116102fb57829003601f168201915b5050505050905090565b600061032f33848461060d565b50600192915050565b6000610345848484610732565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103e45760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103f1853385840361060d565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161032f918590610433908690610cd2565b61060d565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104b05760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420636f6e74726f6c6c6572000000000000000060448201526064016103db565b6104ba8282610930565b5050565b60606004805461029f90610c81565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105455760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420636f6e74726f6c6c6572000000000000000060448201526064016103db565b6104ba8282610a0f565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105e95760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016103db565b6105f6338585840361060d565b5060019392505050565b600061032f338484610732565b6001600160a01b03831661066f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103db565b6001600160a01b0382166106d05760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103db565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166107ae5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103db565b6001600160a01b0382166108105760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103db565b6001600160a01b0383166000908152602081905260409020548181101561089f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103db565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906108d6908490610cd2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161092291815260200190565b60405180910390a350505050565b6001600160a01b0382166109865760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103db565b80600260008282546109989190610cd2565b90915550506001600160a01b038216600090815260208190526040812080548392906109c5908490610cd2565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610a6f5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103db565b6001600160a01b03821660009081526020819052604090205481811015610ae35760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103db565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b12908490610cea565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610725565b600060208083528351808285015260005b81811015610b8257858101830151858201604001528201610b66565b81811115610b94576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610bc157600080fd5b919050565b60008060408385031215610bd957600080fd5b610be283610baa565b946020939093013593505050565b600080600060608486031215610c0557600080fd5b610c0e84610baa565b9250610c1c60208501610baa565b9150604084013590509250925092565b600060208284031215610c3e57600080fd5b610c4782610baa565b9392505050565b60008060408385031215610c6157600080fd5b610c6a83610baa565b9150610c7860208401610baa565b90509250929050565b600181811c90821680610c9557607f821691505b60208210811415610cb657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610ce557610ce5610cbc565b500190565b600082821015610cfc57610cfc610cbc565b50039056fea2646970667358221220f579673b598af1475540dfc3ee73d60af6466b97730b3d56dac1891b2837e04b64736f6c63430008090033";
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
    static createInterface(): PeggedTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PeggedToken;
}
