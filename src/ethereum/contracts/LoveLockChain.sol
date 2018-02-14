pragma solidity ^0.4.17;

contract LoveLockChain {
    /* { address1: "Blockchains are forever", address2: "Blockchains are not forever"} */
    mapping(address => string) public cards;
    mapping(address => address[]) public cardLookup;
    address manager;

    /* array address of card creator */
    address[] public hashes;

    function LoveLockChain() public {
        manager = msg.sender;
    }

    function createCard(string message) public payable{
        require(bytes(message).length < 512); //Limit the message to 256 characters
        require(msg.sender==manager || msg.value >= 0.0005 ether); //TODO tie this to a coinmarket cap and use a dollar amount

        address msgHash = address(keccak256(message));
        cards[msgHash] = message;
        hashes.push(msgHash);

        cardLookup[msg.sender].push(msgHash);
    }

    function getHashes() public view returns (address[]) {
      return hashes;
    }

    function getUserCards(address creator) public view returns (address[]) {
      return cardLookup[creator];
    }

    function payOut() public {
      require(msg.sender==manager);
      manager.transfer(this.balance);
    }
}
