import { ethers } from "ethers";

const RPC_URL = process.env.RPC_URL!;
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

const provider = new ethers.JsonRpcProvider(RPC_URL);

export const contract = new ethers.Contract(
  CONTRACT_ADDRESS,
  [
    "function mint(string fortune) external payable",
    "function getFortune(uint256 tokenId) external view returns (string memory)"
  ],
  provider
);

export const getSignerContract = (signer: ethers.Signer) => {
  return contract.connect(signer);
};
