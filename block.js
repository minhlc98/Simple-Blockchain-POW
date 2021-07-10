const SHA256 = require("crypto-js/sha256");

class Block {
  constructor({ data, created_at, previous_hash }) {
    this.data = data;
    this.created_at = created_at;
    this.previous_hash = previous_hash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(JSON.stringify(this.data) + this.created_at + this.previous_hash + this.nonce).toString();
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }
}

module.exports = Block;
