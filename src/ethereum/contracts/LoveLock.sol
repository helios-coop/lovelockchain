pragma solidity ^0.4.17;

contract LoveLockChain {
    // change to using message hash instead of address
    mapping(address => string) public cards;
    /* cards = { address1: "Blockchains are forever",
                 address2: "Blockchains are not forever",
                 address3: "Blockchains are immutable"
            } */

    function LoveLockChain(initialMessage) public {
      cards[msg.sender]  = initialMessage;
    }

    function createCard(string message) public  payable{
        require(bytes(message).length < 512); //Limit the message to 256 characters
        require(msg.value >= 0.001 ether); //TODO tie this to a coinmarket cap and use a dollar amount
        cards[msg.sender] = message;
    }

}
