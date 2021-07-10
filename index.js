const Block = require("./block");
const Blockchain = require("./blockchain");

const blockchain = new Blockchain();

blockchain.addBlock(
  new Block({ data: { name: "Minhlc", amount: 5000 }, created_at: new Date("01/02/2021") })
);

blockchain.addBlock(
  new Block({ data: { name: "Minhlc98", amount: 10000 }, created_at: new Date("01/03/2021") })
);

const isValidChain = blockchain.isValidChain();
console.log(blockchain.chain);
console.log({ isValidChain });