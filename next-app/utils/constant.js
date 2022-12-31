export const contractAddress = "0x65d4d23ab549A4274EA16D7AF32728aaeb02D2e3";
export const modalStyles = {
  content: {
    height: "300px",
    width: "350px",
    margin: "auto",
    marginTop: "150px",
    display: "flex",
    padding: "0px",
  },
  overlay: {
    backgroundColor: "rgb(0 0 0 / 74%)",
  },
};

export const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "caption",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "ImageCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "caption",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentTip",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalTipped",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "ImageTipped",
    type: "event",
  },
  {
    inputs: [],
    name: "getImages",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "url",
            type: "string",
          },
          {
            internalType: "string",
            name: "caption",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "totalTipAmount",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "author",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "tipperAddress",
            type: "address[]",
          },
        ],
        internalType: "struct Instagram.Image[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "imageCount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "images",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "string",
        name: "caption",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalTipAmount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "author",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "tipImage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
      {
        internalType: "string",
        name: "_caption",
        type: "string",
      },
    ],
    name: "uploadImage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
