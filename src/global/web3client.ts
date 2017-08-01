import * as Web3 from "web3";

const injectedWeb3: Web3 = (window as any).web3;
const web3Client: Web3 = new Web3();

if (typeof injectedWeb3 !== "undefined") {
  // web3 has already been injected by a DBrowser
  web3Client.setProvider(injectedWeb3.currentProvider);
} else {
  // fallback to infura
  web3Client.setProvider(new Web3.providers.HttpProvider("https://mainnet.infura.io/ethwatch-crx"));
}

export default web3Client;
