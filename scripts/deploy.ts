import { ethers } from "hardhat";
import addresses from "../constants/addresses";

async function main() {
  const Forwarder = await ethers.getContractFactory("Forwarder");
  const XenlonMars = await ethers.getContractFactory("XenlonMars");
  const forwarder = await Forwarder.deploy();
  await forwarder.deployed();
  const xenlonMars = await XenlonMars.deploy(forwarder.address, addresses.ETHEREUM_MAINNET.DXN);
  await xenlonMars.deployed();
  console.log(`Forwarder contract deployed to ${forwarder.address}`);
  console.log(`XenlonMars contract deployed to ${xenlonMars.address}`);
  console.log(`XenlonMarsERC20 contract deployed to ${await xenlonMars.xlon()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
