import { useChainId } from 'wagmi';
import { useState, useEffect } from 'react';
import { creditcoinTestnet } from '../wagmi';

export function useNetworkInfo() {
  const chainId = useChainId();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Check if connected to Creditcoin Testnet
  const isCreditcoinTestnet = isMounted && chainId === creditcoinTestnet.id;
  
  // Determine network name based on chain ID
  let networkName = "Unknown Network";
  let networkClass = "bg-gray-900/50 text-gray-400";
  let tokenSymbol = "CTC"; // Default symbol
  
  if (isCreditcoinTestnet) {
    networkName = "Creditcoin Testnet";
    networkClass = "bg-blue-900/50 text-blue-400";
    tokenSymbol = "CTC";
  }
  
  return {
    chainId,
    isMainnet: false,
    isTestnet: isCreditcoinTestnet,
    networkName,
    networkClass,
    tokenSymbol,
    isMounted
  };
} 