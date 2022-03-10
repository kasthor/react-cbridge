import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OriginalTokenVault, OriginalTokenVaultInterface } from "../OriginalTokenVault";
export declare class OriginalTokenVault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_sigsVerifier: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OriginalTokenVault>;
    getDeployTransaction(_sigsVerifier: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OriginalTokenVault;
    connect(signer: Signer): OriginalTokenVault__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200378a3803806200378a833981016040819052620000349162000255565b6001600055620000443362000079565b6001805460ff60a01b191690556200005c33620000cb565b620000673362000195565b6001600160a01b031660805262000287565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03811660009081526002602052604090205460ff16156200013a5760405162461bcd60e51b815260206004820152601960248201527f4163636f756e7420697320616c7265616479207061757365720000000000000060448201526064015b60405180910390fd5b6001600160a01b038116600081815260026020908152604091829020805460ff1916600117905590519182527f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f891015b60405180910390a150565b6001600160a01b03811660009081526003602052604090205460ff1615620002005760405162461bcd60e51b815260206004820152601b60248201527f4163636f756e7420697320616c726561647920676f7665726e6f720000000000604482015260640162000131565b6001600160a01b038116600081815260036020908152604091829020805460ff1916600117905590519182527fdc5a48d79e2e147530ff63ecdbed5a5a66adb9d5cf339384d5d076da197c40b591016200018a565b6000602082840312156200026857600080fd5b81516001600160a01b03811681146200028057600080fd5b9392505050565b6080516134e0620002aa6000396000818161078201526117c101526134e06000f3fe6080604052600436106102a35760003560e01c80636b2c0f551161016e578063adc0d57f116100cb578063e3eece261161007f578063eecdac8811610064578063eecdac8814610822578063f2fde38b14610842578063f83213831461086257600080fd5b8063e3eece26146107b9578063e43581b8146107e957600080fd5b8063b5f2bc47116100b0578063b5f2bc4714610743578063ccf2683b14610770578063e026049c146107a457600080fd5b8063adc0d57f146106b3578063b1c94d941461072d57600080fd5b80638456cb59116101225780639e25fc5c116101075780639e25fc5c146106535780639ff9001a14610673578063a21a92801461069357600080fd5b80638456cb59146106205780638da5cb5b1461063557600080fd5b8063715018a611610153578063715018a6146105bb57806380f51c12146105d057806382dc1ec41461060057600080fd5b80636b2c0f55146105865780636ef8d66d146105a657600080fd5b8063402d267d1161021c57806354eea796116101d05780635c975abb116101b55780635c975abb1461051a5780635ec2fa261461053957806360216b001461055957600080fd5b806354eea796146104e457806357d775f81461050457600080fd5b806346fbf68e1161020157806346fbf68e1461045e57806347b16c6c1461049757806352532faa146104b757600080fd5b8063402d267d146103f9578063457bfa2f1461042657600080fd5b8063303b6442116102735780633c4a25d0116102585780633c4a25d0146103a45780633d572107146103c45780633f4ba83a146103e457600080fd5b8063303b6442146103495780633c29f8391461036957600080fd5b8062a95fd7146102af57806301e64725146102c457806317bdbae514610309578063234636241461032957600080fd5b366102aa57005b600080fd5b6102c26102bd366004612edf565b61088f565b005b3480156102d057600080fd5b506102f46102df366004612f2c565b600b6020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561031557600080fd5b506102c2610324366004612f91565b610ae8565b34801561033557600080fd5b506102c2610344366004612ffd565b610c86565b34801561035557600080fd5b506102c2610364366004612f91565b610dc4565b34801561037557600080fd5b5061039661038436600461305b565b600c6020526000908152604090205481565b604051908152602001610300565b3480156103b057600080fd5b506102c26103bf36600461305b565b610f5b565b3480156103d057600080fd5b506102c26103df366004612f2c565b610fc1565b3480156103f057600080fd5b506102c2611055565b34801561040557600080fd5b5061039661041436600461305b565b600d6020526000908152604090205481565b34801561043257600080fd5b50600e54610446906001600160a01b031681565b6040516001600160a01b039091168152602001610300565b34801561046a57600080fd5b506102f461047936600461305b565b6001600160a01b031660009081526002602052604090205460ff1690565b3480156104a357600080fd5b506102c26104b2366004612f91565b6110be565b3480156104c357600080fd5b506103966104d236600461305b565b60096020526000908152604090205481565b3480156104f057600080fd5b506102c26104ff366004612f2c565b611255565b34801561051057600080fd5b5061039660045481565b34801561052657600080fd5b50600154600160a01b900460ff166102f4565b34801561054557600080fd5b506102c2610554366004612f91565b6112e2565b34801561056557600080fd5b5061039661057436600461305b565b60056020526000908152604090205481565b34801561059257600080fd5b506102c26105a136600461305b565b611479565b3480156105b257600080fd5b506102c26114dc565b3480156105c757600080fd5b506102c26114e5565b3480156105dc57600080fd5b506102f46105eb36600461305b565b60026020526000908152604090205460ff1681565b34801561060c57600080fd5b506102c261061b36600461305b565b611549565b34801561062c57600080fd5b506102c26115ac565b34801561064157600080fd5b506001546001600160a01b0316610446565b34801561065f57600080fd5b506102c261066e366004612f2c565b611613565b34801561067f57600080fd5b506102c261068e36600461305b565b611688565b34801561069f57600080fd5b506102c26106ae366004613076565b611704565b3480156106bf57600080fd5b506107026106ce366004612f2c565b60086020526000908152604090208054600182015460028301546003909301546001600160a01b0392831693919092169184565b604080516001600160a01b039586168152949093166020850152918301526060820152608001610300565b34801561073957600080fd5b50610396600a5481565b34801561074f57600080fd5b5061039661075e36600461305b565b60066020526000908152604090205481565b34801561077c57600080fd5b506104467f000000000000000000000000000000000000000000000000000000000000000081565b3480156107b057600080fd5b506102c2611ac0565b3480156107c557600080fd5b506102f46107d436600461305b565b60036020526000908152604090205460ff1681565b3480156107f557600080fd5b506102f461080436600461305b565b6001600160a01b031660009081526003602052604090205460ff1690565b34801561082e57600080fd5b506102c261083d36600461305b565b611ac9565b34801561084e57600080fd5b506102c261085d36600461305b565b611b2c565b34801561086e57600080fd5b5061039661087d36600461305b565b60076020526000908152604090205481565b600260005414156108e75760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600055600154600160a01b900460ff16156109395760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016108de565b8334146109885760405162461bcd60e51b815260206004820152600f60248201527f416d6f756e74206d69736d61746368000000000000000000000000000000000060448201526064016108de565b600e546001600160a01b03166109e05760405162461bcd60e51b815260206004820152601360248201527f4e61746976652077726170206e6f74207365740000000000000000000000000060448201526064016108de565b600e546000906109fc906001600160a01b031686868686611c0b565b9050600e60009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b158015610a4e57600080fd5b505af1158015610a62573d6000803e3d6000fd5b5050600e54604080518681523360208201526001600160a01b0392831691810191909152606081018a905267ffffffffffffffff8916608082015290871660a08201527f15d2eeefbe4963b5b2178f239ddcc730dda55f1c23c22efb79ded0eb854ac789935060c0019150610ad49050565b60405180910390a150506001600055505050565b3360009081526003602052604090205460ff16610b405760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1033b7bb32b93737b960511b60448201526064016108de565b828114610b815760405162461bcd60e51b815260206004820152600f60248201526e0d8cadccee8d040dad2e6dac2e8c6d608b1b60448201526064016108de565b60005b83811015610c7f57828282818110610b9e57610b9e613165565b9050602002013560096000878785818110610bbb57610bbb613165565b9050602002016020810190610bd0919061305b565b6001600160a01b031681526020810191909152604001600020557fceaad6533bfb481492fb3e08ef19297f46611b8fa9de5ef4cf8dc23a56ad09ce858583818110610c1d57610c1d613165565b9050602002016020810190610c32919061305b565b848484818110610c4457610c44613165565b604080516001600160a01b0390951685526020918202939093013590840152500160405180910390a180610c7781613191565b915050610b84565b5050505050565b60026000541415610cd95760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016108de565b6002600055600154600160a01b900460ff1615610d2b5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016108de565b6000610d3a8686868686611c0b565b9050610d516001600160a01b038716333088611e01565b604080518281523360208201526001600160a01b03888116828401526060820188905267ffffffffffffffff87166080830152851660a082015290517f15d2eeefbe4963b5b2178f239ddcc730dda55f1c23c22efb79ded0eb854ac7899181900360c00190a15050600160005550505050565b3360009081526003602052604090205460ff16610e1c5760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1033b7bb32b93737b960511b60448201526064016108de565b828114610e5d5760405162461bcd60e51b815260206004820152600f60248201526e0d8cadccee8d040dad2e6dac2e8c6d608b1b60448201526064016108de565b60005b83811015610c7f57828282818110610e7a57610e7a613165565b90506020020135600d6000878785818110610e9757610e97613165565b9050602002016020810190610eac919061305b565b6001600160a01b031681526020810191909152604001600020557f0e5d348f9737ccc8b4cf0eea0ccf3670af071af8bea5d64664f10e700c08de72858583818110610ef957610ef9613165565b9050602002016020810190610f0e919061305b565b848484818110610f2057610f20613165565b604080516001600160a01b0390951685526020918202939093013590840152500160405180910390a180610f5381613191565b915050610e60565b6001546001600160a01b03163314610fb55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108de565b610fbe81611e9f565b50565b3360009081526003602052604090205460ff166110195760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1033b7bb32b93737b960511b60448201526064016108de565b600a8190556040518181527fc0a39f234199b125fb93713c4d067bdcebbf691087f87b79c0feb92b156ba8b6906020015b60405180910390a150565b3360009081526002602052604090205460ff166110b45760405162461bcd60e51b815260206004820152601460248201527f43616c6c6572206973206e6f742070617573657200000000000000000000000060448201526064016108de565b6110bc611f5c565b565b3360009081526003602052604090205460ff166111165760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1033b7bb32b93737b960511b60448201526064016108de565b8281146111575760405162461bcd60e51b815260206004820152600f60248201526e0d8cadccee8d040dad2e6dac2e8c6d608b1b60448201526064016108de565b60005b83811015610c7f5782828281811061117457611174613165565b905060200201356006600087878581811061119157611191613165565b90506020020160208101906111a6919061305b565b6001600160a01b031681526020810191909152604001600020557f608e49c22994f20b5d3496dca088b88dfd81b4a3e8cc3809ea1e10a320107e898585838181106111f3576111f3613165565b9050602002016020810190611208919061305b565b84848481811061121a5761121a613165565b604080516001600160a01b0390951685526020918202939093013590840152500160405180910390a18061124d81613191565b91505061115a565b3360009081526003602052604090205460ff166112ad5760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1033b7bb32b93737b960511b60448201526064016108de565b60048190556040518181527f2664fec2ff76486ac58ed087310855b648b15b9d19f3de8529e95f7c46b7d6b39060200161104a565b3360009081526003602052604090205460ff1661133a5760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1033b7bb32b93737b960511b60448201526064016108de565b82811461137b5760405162461bcd60e51b815260206004820152600f60248201526e0d8cadccee8d040dad2e6dac2e8c6d608b1b60448201526064016108de565b60005b83811015610c7f5782828281811061139857611398613165565b90506020020135600c60008787858181106113b5576113b5613165565b90506020020160208101906113ca919061305b565b6001600160a01b031681526020810191909152604001600020557f0f48d517989455cd80ed52427e80553e66f9b69fd5cee8e26bd1a1f9c364fba685858381811061141757611417613165565b905060200201602081019061142c919061305b565b84848481811061143e5761143e613165565b604080516001600160a01b0390951685526020918202939093013590840152500160405180910390a18061147181613191565b91505061137e565b6001546001600160a01b031633146114d35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108de565b610fbe81612002565b6110bc33612002565b6001546001600160a01b0316331461153f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108de565b6110bc60006120bb565b6001546001600160a01b031633146115a35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108de565b610fbe8161210d565b3360009081526002602052604090205460ff1661160b5760405162461bcd60e51b815260206004820152601460248201527f43616c6c6572206973206e6f742070617573657200000000000000000000000060448201526064016108de565b6110bc6121ca565b600154600160a01b900460ff16156116605760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016108de565b600061166b82612252565b9050611684816000015182602001518360400151612417565b5050565b6001546001600160a01b031633146116e25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108de565b600e80546001600160a01b0319166001600160a01b0392909216919091179055565b600154600160a01b900460ff16156117515760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016108de565b600046306040516020016117a792919091825260601b6bffffffffffffffffffffffff191660208201527f57697468647261770000000000000000000000000000000000000000000000006034820152603c0190565b6040516020818303038152906040528051906020012090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663682dbc22828b8b604051602001611803939291906131ac565b6040516020818303038152906040528989898989896040518863ffffffff1660e01b815260040161183a97969594939291906132dd565b60006040518083038186803b15801561185257600080fd5b505afa158015611866573d6000803e3d6000fd5b5050505060006118ab8a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061254c92505050565b6020818101518251604080850151606080870151608088015160a0890151855197841b6bffffffffffffffffffffffff19908116898b015296841b871660348901526048880194909452911b909316606885015260c09290921b77ffffffffffffffffffffffffffffffffffffffffffffffff1916607c8401526084808401929092528051808403909201825260a490920182528051908301206000818152600b9093529120549192509060ff16156119965760405162461bcd60e51b815260206004820152600d60248201526c7265636f72642065786973747360981b60448201526064016108de565b6000818152600b602052604090819020805460ff191660011790558251908301516119c191906126ae565b81516001600160a01b031660009081526009602052604090205480158015906119ed5750808360400151115b15611a0f57611a0a828460200151856000015186604001516127c6565b611a26565b611a26836020015184600001518560400151612417565b602080840151845160408087015160808089015160a0808b01516060808d015187518d81526001600160a01b039a8b169b81019b909b52978916968a01969096529488019390935267ffffffffffffffff16908601528401521660c08201527f296a629c5265cb4e5319803d016902eb70a9079b89655fe2b7737821ed88beeb9060e00160405180910390a1505050505050505050505050565b6110bc336128d9565b6001546001600160a01b03163314611b235760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108de565b610fbe816128d9565b6001546001600160a01b03163314611b865760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108de565b6001600160a01b038116611c025760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016108de565b610fbe816120bb565b6001600160a01b0385166000908152600c60205260408120548511611c725760405162461bcd60e51b815260206004820152601060248201527f616d6f756e7420746f6f20736d616c6c0000000000000000000000000000000060448201526064016108de565b6001600160a01b0386166000908152600d60205260409020541580611caf57506001600160a01b0386166000908152600d60205260409020548511155b611cfb5760405162461bcd60e51b815260206004820152601060248201527f616d6f756e7420746f6f206c617267650000000000000000000000000000000060448201526064016108de565b6040516bffffffffffffffffffffffff1933606090811b8216602084015288811b821660348401526048830188905277ffffffffffffffffffffffffffffffffffffffffffffffff1960c088811b821660688601529187901b909216607084015284811b8216608484015246901b16608c82015260009060940160408051601f1981840301815291815281516020928301206000818152600b90935291205490915060ff1615611ddd5760405162461bcd60e51b815260206004820152600d60248201526c7265636f72642065786973747360981b60448201526064016108de565b6000818152600b60205260409020805460ff19166001179055905095945050505050565b6040516001600160a01b0380851660248301528316604482015260648101829052611e999085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612992565b50505050565b6001600160a01b03811660009081526003602052604090205460ff1615611f085760405162461bcd60e51b815260206004820152601b60248201527f4163636f756e7420697320616c726561647920676f7665726e6f72000000000060448201526064016108de565b6001600160a01b038116600081815260036020908152604091829020805460ff1916600117905590519182527fdc5a48d79e2e147530ff63ecdbed5a5a66adb9d5cf339384d5d076da197c40b5910161104a565b600154600160a01b900460ff16611fb55760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016108de565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b03811660009081526002602052604090205460ff1661206a5760405162461bcd60e51b815260206004820152601560248201527f4163636f756e74206973206e6f7420706175736572000000000000000000000060448201526064016108de565b6001600160a01b038116600081815260026020908152604091829020805460ff1916905590519182527fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e910161104a565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03811660009081526002602052604090205460ff16156121765760405162461bcd60e51b815260206004820152601960248201527f4163636f756e7420697320616c7265616479207061757365720000000000000060448201526064016108de565b6001600160a01b038116600081815260026020908152604091829020805460ff1916600117905590519182527f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8910161104a565b600154600160a01b900460ff16156122175760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016108de565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611fe53390565b604080516080810182526000808252602082018190529181018290526060810191909152600082815260086020908152604091829020825160808101845281546001600160a01b03908116825260018301541692810192909252600281015492820192909252600390910154606082018190526123115760405162461bcd60e51b815260206004820152601a60248201527f64656c61796564207472616e73666572206e6f7420657869737400000000000060448201526064016108de565b600a54816060015161232391906133bd565b42116123715760405162461bcd60e51b815260206004820152601d60248201527f64656c61796564207472616e73666572207374696c6c206c6f636b656400000060448201526064016108de565b600083815260086020908152604080832080546001600160a01b03199081168255600182018054909116905560028101849055600301929092558251908301518383015192517f3b40e5089937425d14cdd96947e5661868357e224af59bd8b24a4b8a330d44269361240993889390929091909384526001600160a01b03928316602085015291166040830152606082015260800190565b60405180910390a192915050565b600e546001600160a01b038381169116141561253357600e54604051632e1a7d4d60e01b8152600481018390526001600160a01b0390911690632e1a7d4d90602401600060405180830381600087803b15801561247357600080fd5b505af1158015612487573d6000803e3d6000fd5b505050506000836001600160a01b03168261c35090604051600060405180830381858888f193505050503d80600081146124dd576040519150601f19603f3d011682016040523d82523d6000602084013e6124e2565b606091505b5050905080611e995760405162461bcd60e51b815260206004820152601b60248201527f6661696c656420746f2073656e64206e617469766520746f6b656e000000000060448201526064016108de565b6125476001600160a01b0383168483612a77565b505050565b6040805160c08101825260008082526020808301829052828401829052606083018290526080830182905260a0830182905283518085019094528184528301849052909190805b602083015151835110156126a6576125aa83612aa7565b909250905081600114156125d9576125c96125c484612ae1565b612b9e565b6001600160a01b03168452612593565b8160021415612601576125ee6125c484612ae1565b6001600160a01b03166020850152612593565b81600314156126255761261b61261684612ae1565b612baf565b6040850152612593565b816004141561264d5761263a6125c484612ae1565b6001600160a01b03166060850152612593565b81600514156126735761265f83612be6565b67ffffffffffffffff166080850152612593565b81600614156126975761268d61268884612ae1565b612c68565b60a0850152612593565b6126a18382612c80565b612593565b505050919050565b6004546126b9575050565b6001600160a01b038216600090815260066020526040902054806126dc57505050565b6001600160a01b0383166000908152600560205260408120546004549091429161270681846133d5565b61271091906133f7565b6001600160a01b03871660009081526007602052604090205490915081111561273b57849250612748565b61274585846133bd565b92505b838311156127985760405162461bcd60e51b815260206004820152601260248201527f766f6c756d65206578636565647320636170000000000000000000000000000060448201526064016108de565b506001600160a01b039094166000908152600560209081526040808320939093556007905220929092555050565b600084815260086020526040902060030154156128255760405162461bcd60e51b815260206004820152601f60248201527f64656c61796564207472616e7366657220616c7265616479206578697374730060448201526064016108de565b604080516080810182526001600160a01b0380861682528481166020808401918252838501868152426060860190815260008b8152600890935291869020945185549085166001600160a01b031991821617865592516001860180549190951693169290921790925551600283015551600390910155517fcbcfffe5102114216a85d3aceb14ad4b81a3935b1b5c468fadf3889eb9c5dce6906128cb9086815260200190565b60405180910390a150505050565b6001600160a01b03811660009081526003602052604090205460ff166129415760405162461bcd60e51b815260206004820152601760248201527f4163636f756e74206973206e6f7420676f7665726e6f7200000000000000000060448201526064016108de565b6001600160a01b038116600081815260036020908152604091829020805460ff1916905590519182527f1ebe834e73d60a5fec822c1e1727d34bc79f2ad977ed504581cc1822fe20fb5b910161104a565b60006129e7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316612cf29092919063ffffffff16565b8051909150156125475780806020019051810190612a059190613416565b6125475760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016108de565b6040516001600160a01b03831660248201526044810182905261254790849063a9059cbb60e01b90606401611e35565b6000806000612ab584612be6565b9050612ac26008826133d5565b9250806007166005811115612ad957612ad9613438565b915050915091565b60606000612aee83612be6565b90506000818460000151612b0291906133bd565b9050836020015151811115612b1657600080fd5b8167ffffffffffffffff811115612b2f57612b2f61344e565b6040519080825280601f01601f191660200182016040528015612b59576020820181803683370190505b50602080860151865192955091818601919083010160005b85811015612b93578181015183820152612b8c6020826133bd565b9050612b71565b505050935250919050565b6000612ba982612d0b565b92915050565b6000602082511115612bc057600080fd5b6020820151905081516020612bd59190613464565b612be09060086133f7565b1c919050565b602080820151825181019091015160009182805b600a811015612c625783811a9150612c138160076133f7565b82607f16901b851794508160801660001415612c5057612c348160016133bd565b86518790612c439083906133bd565b9052509395945050505050565b80612c5a81613191565b915050612bfa565b50600080fd5b60008151602014612c7857600080fd5b506020015190565b6000816005811115612c9457612c94613438565b1415612ca35761254782612be6565b6002816005811115612cb757612cb7613438565b14156102aa576000612cc883612be6565b90508083600001818151612cdc91906133bd565b9052506020830151518351111561254757600080fd5b6060612d018484600085612d33565b90505b9392505050565b60008151601414612d1b57600080fd5b50602001516c01000000000000000000000000900490565b606082471015612dab5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016108de565b843b612df95760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016108de565b600080866001600160a01b03168587604051612e15919061347b565b60006040518083038185875af1925050503d8060008114612e52576040519150601f19603f3d011682016040523d82523d6000602084013e612e57565b606091505b5091509150612e67828286612e72565b979650505050505050565b60608315612e81575081612d04565b825115612e915782518084602001fd5b8160405162461bcd60e51b81526004016108de9190613497565b803567ffffffffffffffff81168114612ec357600080fd5b919050565b80356001600160a01b0381168114612ec357600080fd5b60008060008060808587031215612ef557600080fd5b84359350612f0560208601612eab565b9250612f1360408601612ec8565b9150612f2160608601612eab565b905092959194509250565b600060208284031215612f3e57600080fd5b5035919050565b60008083601f840112612f5757600080fd5b50813567ffffffffffffffff811115612f6f57600080fd5b6020830191508360208260051b8501011115612f8a57600080fd5b9250929050565b60008060008060408587031215612fa757600080fd5b843567ffffffffffffffff80821115612fbf57600080fd5b612fcb88838901612f45565b90965094506020870135915080821115612fe457600080fd5b50612ff187828801612f45565b95989497509550505050565b600080600080600060a0868803121561301557600080fd5b61301e86612ec8565b94506020860135935061303360408701612eab565b925061304160608701612ec8565b915061304f60808701612eab565b90509295509295909350565b60006020828403121561306d57600080fd5b612d0482612ec8565b6000806000806000806000806080898b03121561309257600080fd5b883567ffffffffffffffff808211156130aa57600080fd5b818b0191508b601f8301126130be57600080fd5b8135818111156130cd57600080fd5b8c60208285010111156130df57600080fd5b60209283019a509850908a013590808211156130fa57600080fd5b6131068c838d01612f45565b909850965060408b013591508082111561311f57600080fd5b61312b8c838d01612f45565b909650945060608b013591508082111561314457600080fd5b506131518b828c01612f45565b999c989b5096995094979396929594505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156131a5576131a561317b565b5060010190565b838152818360208301376000910160200190815292915050565b60005b838110156131e15781810151838201526020016131c9565b83811115611e995750506000910152565b6000815180845261320a8160208601602086016131c6565b601f01601f19169290920160200192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8183526000602080850194508260005b85811015613283576001600160a01b0361327083612ec8565b1687529582019590820190600101613257565b509495945050505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156132c057600080fd5b8260051b8083602087013760009401602001938452509192915050565b6080815260006132f0608083018a6131f2565b82810360208401528088825260208201905060208960051b8301018a60005b8b81101561338357848303601f190184528135368e9003601e1901811261333557600080fd5b8d01803567ffffffffffffffff81111561334e57600080fd5b8036038f131561335d57600080fd5b61336b85826020850161321e565b6020968701969095509390930192505060010161330f565b5050848103604086015261339881898b613247565b9250505082810360608401526133af81858761328e565b9a9950505050505050505050565b600082198211156133d0576133d061317b565b500190565b6000826133f257634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156134115761341161317b565b500290565b60006020828403121561342857600080fd5b81518015158114612d0457600080fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6000828210156134765761347661317b565b500390565b6000825161348d8184602087016131c6565b9190910192915050565b602081526000612d0460208301846131f256fea2646970667358221220d1ea63dadf3688143a49a7575930c8577e79530150bfc348b3a71bc765cc286264736f6c63430008090033";
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): OriginalTokenVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OriginalTokenVault;
}
