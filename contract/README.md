# Smart Contract for Rock-Paper-Scissors on Creditcoin Testnet

This is a decentralized Rock-Paper-Scissors Smart contract deployed on the Creditcoin Testnet. The Smart Contract acts as the intermediary that allows users to create and join games, track their move history, and view past game results, all while ensuring transparency and fairness through blockchain technology.

## Getting Started

To get started with the contract, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Afoxcute/rsk-battle-arena.git
   cd rsk-battle-arena
   Edit hardhat.config.ts and change the URL(which is the RPC URL) as desired.
   ```

2. Install the dependencies:
   ```bash
   npm install or yarn install
   create .env file and add YOUR_PRIVATE_KEY to it
   ```

3. Compile & Deploy Contract:
   ```bash
   npx hardhat compile
   npx hardhat run ./scripts/deploy.js --network creditcoinTestnet
   ```

4. Open [Testnet Contract on-chain](https://creditcoin-testnet.blockscout.com/address/0x1d232F406CC26345C3af846767b38782f5834A7a) in your browser to see the Contract on-chain.

