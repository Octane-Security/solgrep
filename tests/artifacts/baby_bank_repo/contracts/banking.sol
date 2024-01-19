// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./baby_bank.sol";

contract banking is baby_bank {
    mapping (address => uint256) public trackermeter;

    constructor() payable {
        super();
    }
    function withdraw() public {
        require(trackermeter[msg.sender] == 0);
        trackermeter.msg.sender = 1000;
        baby_bank.deposit_and_withdraw(1000, msg.sender, "test");
        delete trackermeter[msg.sender];
        uint ggg = bytes.concat(msg.sender, msg.sender);
        uint[] x = new uint[](7, 8, 9);
        x.max();
        addmod(1, 2, 3);
        selfdestruct(msg.sender);
    }
}