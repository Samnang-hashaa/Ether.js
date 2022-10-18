// send amount of native token between accounts
// const { ethers } = require("ethers");
import { ethers, Wallet } from "ethers";
import { getBalance } from "./balance";
require("dotenv").config();

export const sendETH = async (

  amount: string,
  recipient: string

): Promise<ethers.providers.TransactionResponse> => {

  const provider = new ethers.providers.InfuraProvider(
    "goerli",
    process.env.API_KEY
  );

  if (!process.env.PRIVATE_KEY) throw Error("No Private Key!");

  const wallet = new Wallet(process.env.PRIVATE_KEY,
     provider);
  const signer = wallet.connect(provider);

  const balance = await getBalance(wallet.address);
  if (!balance) throw Error("No Amount !");

  console.log(`Balance of sender: ${balance} ETH`);

  const tx = {
    from: wallet.address,
    to: recipient,
    value: ethers.utils.parseEther(amount),
  };

  const transaction = await signer.sendTransaction(tx);
  return transaction;
};

// (async () => {
//   const provider = new ethers.providers.InfuraProvider(
//     "goerli",
//     process.env.API_KEY
//   );
//   if (!process.env.PRIVATE_KEY) throw Error("No Private Key!");
//   const wallet = new Wallet(process.env.PRIVATE_KEY, provider);
//   const signer = wallet.connect(provider);

//   //   const wallet = ethers.Wallet.fromMnemonic(
//   //     "gesture dice dance orange seek cream quick earn riot egg pride recall"
//   //   );
//   //   const wallet= ethers.Wallet.createRandom()
//   //   const gasPrice = await connection.getGasPrice();
//   wallet.getBalance().then(console.log);

//   const recipient = "0xd9571666B947761210260E6bB4D55130A2088ce2";

//   const tx = {
//     from: wallet.address,
//     to: recipient,
//     value: ethers.utils.parseUnits("0.01", "ether"),
//     // gasPrice: gasPrice,
//     // gasLimit: ethers.utils.hexlify(100000),
//     // nonce: connection.getTransactionCount(wallet.address, "latest"),
//   };

//   const transaction = await signer.sendTransaction(tx);

//   console.log(transaction);
// })();