class ContentService {
    constructor(web3, contractAddress, abi) {
        this.web3 = web3;
        this.contract = new this.web3.eth.Contract(abi, contractAddress);
    }

    async registerContent(title, description, contentHash, account) {
        const tx = await this.contract.methods.registerContent(title, description, contentHash).send({ from: account });
        return tx;
    }

    async transferOwnership(contentHash, newOwner, account) {
        const tx = await this.contract.methods.transferOwnership(contentHash, newOwner).send({ from: account });
        return tx;
    }

    async getContent(contentHash) {
        const content = await this.contract.methods.getContent(contentHash).call();
        return content;
    }

    async getUserContents(owner) {
        const contents = await this.contract.methods.getUserContents(owner).call();
        return contents;
    }
}

module.exports = ContentService;