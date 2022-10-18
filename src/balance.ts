import { ethers } from "ethers";
require("dotenv").config();


export const getBalance = async (address: string): Promise<String> => {
  const provider = new ethers.providers.InfuraProvider(
    "goerli",
    
    process.env.API_KEY
  );

  const balance = await provider.getBalance(address);
  const formatted = ethers.utils.formatEther(balance);
  //    ethers.utils.parseEther(balance);
  return formatted;
};

