import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { defineChain } from "viem";
import { http } from 'wagmi';

/** Creditcoin Testnet - https://creditcoin.network */
export const creditcoinTestnet = defineChain({
  id: 102031,
  name: 'Creditcoin Testnet',
  nativeCurrency: {
    name: 'CTC',
    symbol: 'CTC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.cc3-testnet.creditcoin.network'],
      webSocket: ['wss://rpc.cc3-testnet.creditcoin.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://creditcoin-testnet.blockscout.com/',
    },
  },
});

export const config = getDefaultConfig({
  appName: 'britz',
  projectId: '2c22698ed6fa65b5ab4a6acb4af0b952',
  chains: [creditcoinTestnet],
  ssr: true,
  transports: {
    [creditcoinTestnet.id]: http('https://rpc.cc3-testnet.creditcoin.network'),
  },
});
