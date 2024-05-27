// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract HelloWorld {

    string saySomething;

    constructor() {
        saySomething = "Hello World! This is hello world contract.";
    }

    function speak() public view returns(string memory) {
        return saySomething;
    }
}