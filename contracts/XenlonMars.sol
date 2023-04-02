// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// TODO: support total burned by address and total burned

contract XenlonMars is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Xenlon Mars", "XLON") {}

    function mint(address to, uint256 amountToBurn) public {
        IERC20 dbxenToken = IERC20(0x80f0C1c49891dcFDD40b6e0F960F84E6042bcB6F);
        require(
            dbxenToken.allowance(msg.sender, address(this)) >= amountToBurn,
            "insufficient allowance"
        );
        require(
            dbxenToken.transferFrom(
                msg.sender,
                address(0x0000000000000000000000000000000000000000),
                amountToBurn
            ),
            "transfer failed"
        );
        _mint(to, amountToBurn * 100000000000000000000000000);
    }
}
