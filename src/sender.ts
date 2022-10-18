// import { ethers, Wallet } from "ethers";
// require("dotenv").config();

// export const getsender = async (address: string): Promise<String> => {
//     const provider = new ethers.providers.InfuraProvider(
//         "goerli",
//         process.env.API_KEY
//       );
//       if (!process.env.PRIVATE_KEY) throw Error("No Private Key!");
//       const wallet = new Wallet(process.env.PRIVATE_KEY, provider);
//       const signer = wallet.connect(provider);

//       wallet.getBalance().then(console.log);

//     //   const recipient = "0xd9571666B947761210260E6bB4D55130A2088ce2";
//       const recipient = getsender(address);
//       const tx = {
//         from: wallet.address,
//         to: recipient,
//         value: ethers.utils.parseUnits("0.01", "ether"),
//       };

//       const transaction = await signer.sendTransaction(tx);

//       console.log(transaction);
//       const formatted = ethers.utils.formatEther(tx);
//       return formatted;

//     };
