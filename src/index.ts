
import { program } from "commander";
import { getchecktx } from "./checktx";
import { getBalance } from "./balance";
import { sendETH } from "./send";
require("dotenv").config();

program
  .name("ether")
  .description("CLI to interact with ethers.js")
  .version("0.1.0");

program
  .command("balance <address>")
  .description("show balance of an address")
  .action(async (address) => {
    const balance = await getBalance(address);

    console.log(`Balance of ${address}: ${balance} ETH`);
  });

program
  .command("send <amount> <recipient>")
  .description("send amount of ETH to recipient")
  .action(async (amount, recipient) => {
    const txn = await sendETH(amount, recipient);

    console.log("Transaction Hasha:", txn.hash);
});

program
  .command("checktx <hash>")
  .description("show receipt of an address")
  .action(async (hash) => {
    const checktx= await getchecktx(hash);

    console.log(`Receipt of ${hash}`,checktx);
  });


program.parse();


// const blockHeight = await provider.getBlockNumber();
// console.log(signer);
// const tx = signer.sendTransaction({
//   to: "ricmoo.firefly.eth",
//   value: ethers.utils.parseEther("1.0"),
// });
