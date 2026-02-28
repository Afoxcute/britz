require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.26",
    settings: {
      evmVersion: "london"
    }
  },
  networks: {
    creditcoinTestnet: {
      url: "https://rpc.cc3-testnet.creditcoin.network",
      accounts: [process.env.YOUR_PRIVATE_KEY],
      chainId: 102031,
      gasPrice: 1000000000, // 1 gwei
      gas: 2100000,
      timeout: 60000
    }
  },
};
