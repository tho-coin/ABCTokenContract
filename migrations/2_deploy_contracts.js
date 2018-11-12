const ABCToken = artifacts.require('ABCToken');
const ABCTokenContract = artifacts.require('ABCTokenContract');

module.exports = function(deployer) {
    deployer.deploy(
        ABCToken,
        'ABC Token',
        'ABC',
        '18'
    ).then(() => {
        return deployer.deploy(
            ABCTokenContract,
            '0x63b14ea722e7809300f368e823b8e7591c25c34f', // ETH Address to receive ICO funds
            ABCToken.address,
            '1000000000000000000000000000', // 1,000,000,000 ABC Token
            '20000' // 1 ETH = 20,000 ABC
        ).then(() => {
            return ABCToken.deployed().then(function(instance) {
                return instance.setIcoContract(ABCTokenContract.address);
            });
        });
    });
};