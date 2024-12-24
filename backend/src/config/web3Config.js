module.exports = {
  ETH_NODE_URL: process.env.ETH_NODE_URL || "http://127.0.0.1:8545",
  CONTRACT_ADDRESS:
    process.env.CONTRACT_ADDRESS ||
    "0x5F3b8A1a638De722be1C521456b1915A2871e0A3",
  ABI: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "contentHash",
          type: "string",
        },
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      name: "ContentRegistered",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "contentHash",
          type: "string",
        },
        {
          indexed: false,
          internalType: "address",
          name: "oldOwner",
          type: "address",
        },
        {
          indexed: false,
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
          internalType: "string",
          name: "_contentHash",
          type: "string",
        },
      ],
      name: "getContent",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "title",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "string",
              name: "contentHash",
              type: "string",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          internalType: "struct ContentOwnership.Content",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
      ],
      name: "getUserContents",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_title",
          type: "string",
        },
        {
          internalType: "string",
          name: "_description",
          type: "string",
        },
        {
          internalType: "string",
          name: "_contentHash",
          type: "string",
        },
      ],
      name: "registerContent",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_contentHash",
          type: "string",
        },
        {
          internalType: "address",
          name: "_newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
