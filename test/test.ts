import { expect } from "chai";
import { ethers } from "hardhat";
import addresses from "../constants/addresses";
import { XenlonMars, Forwarder, DBXenERC20 } from "../typechain-types";
import XenlonMarsErc20Abi from "../abis/XenlonMarsERC20.json";

describe("XenlonMars", function () {
  let forwarder: Forwarder;
  let xenlonMars: XenlonMars;
  let dbxenErc20: DBXenERC20;

  beforeEach(async () => {
    const Forwarder = await ethers.getContractFactory("Forwarder");
    const XenlonMars = await ethers.getContractFactory("XenlonMars");
    const DbxenErc20 = await ethers.getContractFactory("DBXenERC20");
    forwarder = await Forwarder.deploy();
    xenlonMars = await XenlonMars.deploy(forwarder.address, addresses.ETHEREUM_MAINNET.DXN);
    dbxenErc20 = await DbxenErc20.attach(addresses.ETHEREUM_MAINNET.DXN);
    await xenlonMars.deployed();
  });

  it("should deploy token contract", async function () {
    expect(await xenlonMars.xlon()).to.be.a('string');
  });

  it("should give me 100000000 XLON per 1 DXN burned", async function () {
    const dxnWhale = addresses.ETHEREUM_MAINNET.DXN_WHALE;
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [dxnWhale],
    });
    const signer = await ethers.provider.getSigner(dxnWhale);
    const _dbxenErc20 = await dbxenErc20.connect(signer);
    await _dbxenErc20.approve(xenlonMars.address, ethers.constants.MaxUint256);
    const _xenlonMars = await xenlonMars.connect(signer);
    await _xenlonMars.burn(ethers.utils.parseEther("1"));
    const xenlonMarsErc20 = new ethers.Contract(await xenlonMars.xlon(), XenlonMarsErc20Abi, hre.ethers.provider);
    const bal = await xenlonMarsErc20.balanceOf(signer._address);
    expect(bal).to.equal(ethers.utils.parseEther("100000000"));
  });
});
