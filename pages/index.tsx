"use client";

import { useState } from "react";
import { getSignerContract } from "../lib/contract";
import { ethers } from "ethers";

export default function Home() {
  const [fortune, setFortune] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [message, setMessage] = useState("");

  const handleMint = async () => {
    if (!(window as any).ethereum) {
      setMessage("Please install MetaMask!");
      return;
    }

    const provider = new ethers.BrowserProvider((window as any).ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const contract = getSignerContract(signer);

    try {
      const tx = await contract.mint(fortune, { value: ethers.parseEther("0") });
      await tx.wait();
      setMessage("Mint successful!");
    } catch (e: any) {
      setMessage("Mint failed: " + e.message);
    }
  };

  const handleGetFortune = async () => {
    if (!tokenId) return;
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const contract = getSignerContract(provider);
    try {
      const result = await contract.getFortune(Number(tokenId));
      setMessage("Your fortune: " + result);
    } catch (e: any) {
      setMessage("Error: " + e.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>FortuneCast Mini App</h1>
      <input
        type="text"
        placeholder="Your fortune"
        value={fortune}
        onChange={(e) => setFortune(e.target.value)}
      />
      <button onClick={handleMint}>Mint</button>
      <br /><br />
      <input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <button onClick={handleGetFortune}>Get Fortune</button>
      <p>{message}</p>
    </div>
  );
}
