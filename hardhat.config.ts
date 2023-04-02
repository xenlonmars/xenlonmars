import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  etherscan: {
    apiKey: "",
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/cefa7de205f543888138627880fab9cb",
        blockNumber: 16962846
      }
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/cefa7de205f543888138627880fab9cb",
      accounts: [
        ""
      ],
    },
  }
};

export default config;
