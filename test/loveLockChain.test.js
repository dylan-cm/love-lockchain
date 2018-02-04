const assert = require("assert");

// local ethereum test network
const ganache = require("ganache-cli");

// web3 instance is a library we can use to interact with our contracts on the ethereum networks
const Web3 = require("web3");

// provider is the link between the web3 library and the etherum network
const provider = ganache.provider();
const web3 = new Web3(provider);

// gets interface(abi), and byte code of the compiled contract
const { interface, bytecode } = require("../ethereum/compile.js");

//accounts used to deploy contract
let accounts;
//contract
let loveLockChain;

// Deploy contract and set provider before each test
beforeEach(async () => {
  // Get list of all accounts
  accounts = await web3.eth.getAccounts();

  // get contract in interace
  loveLockChain = await new web3.eth.Contract(JSON.parse(interface))
    // deploy with bytecode and arguments
    .deploy({
      data: bytecode,
      arguments: ["Block Chains are Forever"]
    })
    // Use one of the accounts to deploy the contract
    .send({ from: accounts[0], gas: "1000000" });

  // set a provider as a bridge between deployed contract and the web3 interface libary
  loveLockChain.setProvider(provider);
});

// Test contract methods
describe("LoveLockChain", () => {
  it("deploys a contract", () => {
    assert.ok(loveLockChain.options.address);
  });

  it("has a default message", async () => {
    const message = await loveLockChain.methods.cards(accounts[0]).call();
    assert.equal("Block Chains are Forever", message);
  });

  it("can create a card", async () => {
    await loveLockChain.methods
      .createCard("Blockchains are immutable")
      .send({ from: accounts[1], value: web3.utils.toWei(".001", "ether") });
    assert.equal(
      "Blockchains are immutable",
      await loveLockChain.methods.cards(accounts[1]).call()
    );
  });

  it("can return all creator addresses", async () => {
    const creators = await loveLockChain.methods.getCreators().call();
    assert.equal(accounts[0], creators[0]);
  });

  // it("has a card design", async () => {
  //   const design = await loveLockChain.methods.design().call();
  //   assert.equal("11001", design);
  // });
});
