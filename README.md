# britz

A decentralized Rock-Paper-Scissors game built on **Creditcoin Testnet**. The application allows users to create and join games, track their move history, and view past game results, all while ensuring transparency and fairness through blockchain technology.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Game Modes](#game-modes)
- [Architecture](#architecture)
- [Smart Contract](#smart-contract)
- [Technologies Used](#technologies-used)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd britz
   ```

2. Install the dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

5. **Connect your wallet** to Creditcoin Testnet to start playing!

## Features

- **Home Page**: Provides an overview of the game and a button to navigate to the game tab.
- **Game Tab**: 
  - **Create Game**: Users can create a game by selecting the game type (Lightning Duel, Warrior Clash, Epic Tournament) and setting a stake in CTC.
  - **Join Game**: Users can search for existing games using a game ID and join if there is an available slot.
- **Real-Time Gameplay**: Players are notified of their opponent's moves, and results are displayed only after both players have made their moves.
- **History Tab**: Users can view their past games and move history for transparency.

## Game Modes

britz offers three exciting game modes:

- **⚡ Lightning Duel**: Single round, winner takes all
- **🗡️ Warrior Clash**: First to win 2 rounds (Best of 3)
- **👑 Epic Tournament**: First to win 5 rounds (Best of 5)

## Architecture

The application is structured as follows:

- **Frontend**: Built with Next.js 15, utilizing React for the UI and Wagmi v2 for Creditcoin Testnet interactions.
- **Smart Contracts**: The game logic is implemented in Solidity, ensuring secure and transparent gameplay.
- **Blockchain**: All game states and transactions are recorded on the Creditcoin Testnet.

### Key Components

- **Frontend Pages**: 
  - `src/pages/index.tsx`: Home page.
  - `src/pages/game.tsx`: Game creation and joining interface.
  - `src/pages/game/[gameId].tsx`: Individual game interface.
  - `src/pages/history.tsx`: Displays the user's game history.
- **Components**: 
  - `CreateGame.tsx`: UI for creating a game.
  - `JoinGame.tsx`: UI for joining a game.
  - `GamePlay.tsx`: Displays the game in progress.
  - `GameSearchCard.tsx`: Displays available games to join.

## Smart Contract

### Contract Details

- **Contract Address**: `0x1d232F406CC26345C3af846767b38782f5834A7a`
- **Network**: Creditcoin Testnet (Chain ID: 102031)
- **Explorer**: [View on Blockscout](https://creditcoin-testnet.blockscout.com/address/0x1d232F406CC26345C3af846767b38782f5834A7a)

### Contract Features

- Secure game creation and joining
- Transparent move tracking
- Automatic winner determination
- Stake management with creator fee (25 basis points)
- Reentrancy protection
- Ownership controls

### Deploying the Contract

For instructions on deploying the smart contract, see the [Deployment Guide](./contract/DEPLOYMENT_GUIDE.md) in the `contract` directory.

## Technologies Used

- **Frontend Framework**: Next.js 15
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Blockchain Integration**: 
  - Wagmi v2.5.7
  - RainbowKit v2.0.1
  - Viem 2.x
- **Smart Contracts**: Solidity 0.8.26
- **Blockchain Network**: Creditcoin Testnet
- **Package Manager**: Yarn

## Requirements

- Node.js 18+ 
- Yarn or npm
- A Web3 wallet (MetaMask, WalletConnect, etc.)
- Creditcoin Testnet CTC for gas fees and staking

## Getting Testnet CTC

You'll need Creditcoin Testnet CTC to play. Get it from the Creditcoin testnet faucet or community channels.

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ on Creditcoin Testnet**
