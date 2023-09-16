require("dotenv").config();
const { Config } = require("./src/utils");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = process.env.MNEMONIC;
const BLOCKCHAINSERV = Config.BLOCKCHAINSERV;

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },

    // Used for the Gnosis network
    gnosis: {
          provider: function() {
                return new HDWalletProvider(
               MNEMONIC,
               "https://rpc.gnosischain.com")
          },
          network_id: 100,
          gas: 500000,
          gasPrice: 1000000000
    },
    chiado: {
          provider: function() {
                return new HDWalletProvider(
              MNEMONIC,
               "https://rpc.chiadochain.net")
          },
          network_id: 10200,
          gas: 0,
          gasPrice: 0
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "istanbul"
      }
    },
  },
};
