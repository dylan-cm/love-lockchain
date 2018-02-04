pragma solidity ^0.4.17;

contract LoveLockChain {
    /* { address1: "Blockchains are forever", address2: "Blockchains are not forever"} */
    mapping(address => string) public cards;

    /* array address of card creator */
    address[] public creators;

    function LoveLockChain(string initialMessage) public {
        cards[msg.sender]  = initialMessage;
        creators.push(msg.sender);
    }

    function createCard(string message) public payable{
        require(bytes(message).length < 512); //Limit the message to 256 characters
        require(msg.value >= 0.001 ether); //TODO tie this to a coinmarket cap and use a dollar amount
        cards[msg.sender] = message;
        creators.push(msg.sender);
    }

    function getCreators() public view returns (address[]) {
      return creators;
    }
}
