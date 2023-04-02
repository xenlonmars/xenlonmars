import { expect } from "chai";
import { ethers } from "hardhat";

describe("XenlonMars", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("XenlonMars");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("Xenlon Mars");
  });
});
