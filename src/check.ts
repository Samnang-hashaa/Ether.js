//check the transaction detail with transaction hash
// const { ethers } = require("ethers");
// import { ethers } from "ethers";
// require("dotenv").config();
// import commander, { Command } from "commander";

// const program: Command = new Command();

// program
//   .name("ether")
//   .description("check transaction")
//   .version("0.1.0")
//   .command("checktx");

// program.command("balance");

// (async function () {
//   const provider = new ethers.providers.InfuraProvider(
//     "homestead",
//     process.env.RPC_ENDPOINT_MAIN
//   );
//   // console.log(provider)
//   const receipt = await provider.getTransactionReceipt(
//     "0x85fc1b1d8338fcdba9e91c3f320cc002d4e06d2bb0d3a0aede5b4b336ef374de"
//   );

//   console.log(receipt);
// })();

// program.parse();

// import { program } from "commander";

// import { getchecktx } from "./checktx";

// program
//   .name("ether")
//   .description("CLI to interact with ethers.js")
//   .version("0.1.0");

// program
//   .command("checktx <address>")
//   .description("show receipt of an address")
//   .action(async (hash) => {
//     const checktx = await getchecktx(hash);

//     console.log(`Receipt of ${hash}`);
//   });

// program.parse();


