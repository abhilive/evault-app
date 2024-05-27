import { HardhatUserConfig } from "hardhat/config";
import 'dotenv/config';
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    besuWallet: {
      url: 'http://127.0.0.1:8545',
      accounts: ['0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63'],
      chainId: 1337,
      gasPrice: 0
    },
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    }
  }
};

export default config;
