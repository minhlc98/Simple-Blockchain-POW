const _ = require("lodash");
const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
  }

  createGenesisBlock() {
    const data = "Genesis";
    const created_at = new Date("01/01/2021");
    created_at.setHours(0,0,0,0);
    const previous_hash = "0";
    return new Block({ data, created_at, previous_hash });
  }

  getLastestBlock() {
    return _.last(this.chain);
  }

  addBlock(newBlock) {
    newBlock.previous_hash = this.getLastestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isValidChain() {
    const { chain } = this;
    for (let i = 1; i < this.chain.length; ++i) {
      const previousBlock = chain[i - 1];
      const currentBlock = chain[i];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previous_hash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;