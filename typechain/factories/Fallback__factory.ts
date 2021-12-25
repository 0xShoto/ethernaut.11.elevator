/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Fallback, FallbackInterface } from "../Fallback";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "contributions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContribution",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550683635c9adc5dea000006000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506106af806100ad6000396000f3fe60806040526004361061004e5760003560e01c80633ccfd60b146100f257806342e94c90146101095780638da5cb5b14610146578063d7bb99ba14610171578063f10fdf5c1461017b576100ed565b366100ed576000341180156100a1575060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054115b6100aa57600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550005b600080fd5b3480156100fe57600080fd5b506101076101a6565b005b34801561011557600080fd5b50610130600480360381019061012b919061048c565b6102a1565b60405161013d9190610535565b60405180910390f35b34801561015257600080fd5b5061015b6102b9565b60405161016891906104fa565b60405180910390f35b6101796102df565b005b34801561018757600080fd5b50610190610431565b60405161019d9190610535565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610236576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022d90610515565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561029e573d6000803e3d6000fd5b50565b60006020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b66038d7ea4c6800034106102f257600080fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103409190610561565b92505081905550600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111561042f5733600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60008135905061048681610662565b92915050565b6000602082840312156104a2576104a1610634565b5b60006104b084828501610477565b91505092915050565b6104c2816105c9565b82525050565b60006104d5601783610550565b91506104e082610639565b602082019050919050565b6104f4816105fb565b82525050565b600060208201905061050f60008301846104b9565b92915050565b6000602082019050818103600083015261052e816104c8565b9050919050565b600060208201905061054a60008301846104eb565b92915050565b600082825260208201905092915050565b600061056c826105fb565b9150610577836105fb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156105ac576105ab610605565b5b828201905092915050565b60006105c2826105db565b9050919050565b60006105d4826105db565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b7f63616c6c6572206973206e6f7420746865206f776e6572000000000000000000600082015250565b61066b816105b7565b811461067657600080fd5b5056fea264697066735822122011dc3895015fcd5dfd17130bed575e40bedd8fb2460407749d2ab7a9b4cfc08064736f6c63430008060033";

export class Fallback__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Fallback> {
    return super.deploy(overrides || {}) as Promise<Fallback>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Fallback {
    return super.attach(address) as Fallback;
  }
  connect(signer: Signer): Fallback__factory {
    return super.connect(signer) as Fallback__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FallbackInterface {
    return new utils.Interface(_abi) as FallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Fallback {
    return new Contract(address, _abi, signerOrProvider) as Fallback;
  }
}
