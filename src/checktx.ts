import { ethers } from "ethers";
require("dotenv").config();

export const getchecktx = async (Hash: string) => { 
 
    const provider = new ethers.providers.InfuraProvider(
        "goerli",
        process.env.API_KEY
      );

    const receipt = await provider.getTransactionReceipt(Hash);

    return receipt;
  };