require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain exchange hidden knife blue situate'; 
let testAccounts = [
"0xafd0943bc01b2210832fed9aa7c769638af8d49f6e1264085698db57fd26d9e4",
"0x3bbad99e7935f0a63fd4125422910f3785e31269e65b783071521cfe7e04be1d",
"0xdfc1780f409502b71ab225845a039c333c4dcfbce4c962906e1be959763517d7",
"0xa6a348d1ea5d752471c2d38304437e81c4c93403dc289b1356a99ada5a4418d1",
"0xab83bfd2fca2883c188740709e6522e25bbce6c3883952b0690888618e9353a7",
"0xd99c6a11a1c4dc82624b50063df8711df8bf01a62fbc15abff9fce63cdbc76f9",
"0x0ba2124c2e616e6220d4951abd488255b60e3c351d38fcc4605162d4280f6490",
"0x6b798681011a222c2046b592ab0c305e8a01520ea055d00266ec26d71ed89b5e",
"0x59c155cb638f6a40694f40e564d924f1f6da1e81605088de528166eaea65f6e1",
"0xe2f439726fb9fa55f141a81e0e65703beb0cc75298bb38c4d4edb2423b58248b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

