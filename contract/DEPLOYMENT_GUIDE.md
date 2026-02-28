# Smart Contract Deployment Guide

This guide will walk you through deploying the RockPaperScissors smart contract to **Creditcoin Testnet**.

## Prerequisites

1. **Node.js and Yarn** installed
2. **A wallet** with Creditcoin Testnet CTC for gas fees
3. **Your wallet's private key** (keep this secure!)

## Step 1: Get Testnet CTC

You need Creditcoin Testnet CTC to pay for gas fees. Get it from the Creditcoin testnet faucet or community channels.

Make sure you have at least some CTC on Creditcoin Testnet.

## Step 2: Set Up Environment Variables

1. Navigate to the `contract` directory:
   ```bash
   cd contract
   ```

2. Create a `.env` file in the `contract` directory:
   ```bash
   # Windows PowerShell
   New-Item .env
   
   # Or create manually
   ```

3. Add your private key to the `.env` file:
   ```
   YOUR_PRIVATE_KEY=your_private_key_here_without_0x_prefix
   ```

   **⚠️ IMPORTANT SECURITY NOTES:**
   - Never commit the `.env` file to git (it's already in `.gitignore`)
   - Never share your private key with anyone
   - Remove the `0x` prefix if your private key has it
   - Example: If your key is `0x1234...`, use `1234...` in the .env file

## Step 3: Install Dependencies

If you haven't already, install all dependencies:

```bash
yarn install
```

## Step 4: Compile the Contract

Compile the smart contract to check for errors:

```bash
npx hardhat compile
```

You should see:
```
Compiled 6 Solidity files successfully
```

## Step 5: Deploy the Contract

Deploy to Creditcoin Testnet:

```bash
npx hardhat run scripts/deploy.js --network creditcoinTestnet
```

### What to Expect

After running the deployment command, you should see output like:

```
Contract deployed successfully.
Deployer: 0xYourWalletAddress
Deployed to: 0xContractAddress
Transaction hash: 0xTransactionHash
```

**Save the contract address!** You'll need it to update your frontend.

## Step 6: Verify the Deployment

1. Copy the contract address from the deployment output
2. Visit the Creditcoin Testnet block explorer:
   - **Blockscout**: https://creditcoin-testnet.blockscout.com/

3. Search for your contract address to view the deployment

## Step 7: Update Frontend Contract Address

After deployment, update your frontend to use the new contract address:

1. Open `src/constants/contractInfo.tsx`
2. Update the `contractAddress` with your newly deployed contract address

## Troubleshooting

### Error: "insufficient funds"
- Make sure you have Creditcoin Testnet CTC in your wallet
- Get more from the testnet faucet or community channels

### Error: "nonce too high"
- Wait a few minutes and try again
- Or manually set a nonce in Hardhat config

### Error: "network mismatch"
- Verify your `.env` file has the correct private key
- Check that `hardhat.config.ts` has the correct network configuration

### Error: "contract verification failed"
- This is optional - contract verification is for transparency
- Your contract will still work without verification

## Network Configuration

The contract is configured to deploy to:
- **Network**: Creditcoin Testnet
- **Chain ID**: 102031
- **RPC URL**: https://rpc.cc3-testnet.creditcoin.network
- **Block Explorer**: https://creditcoin-testnet.blockscout.com/

## Next Steps

After successful deployment:

1. ✅ Save the contract address
2. ✅ Update `src/constants/contractInfo.tsx` with the new address
3. ✅ Test the contract interaction in your frontend
4. ✅ Verify the contract on Blockscout (optional but recommended)

## Security Reminders

- ⚠️ Never commit `.env` files
- ⚠️ Never share your private key
- ⚠️ Use a dedicated testnet wallet for development
- ⚠️ Double-check the network before deploying

---

**Need Help?** Check the main README.md or open an issue on GitHub.

