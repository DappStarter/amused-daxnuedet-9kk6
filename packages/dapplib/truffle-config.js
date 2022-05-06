require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rate magnet assist install clinic bone trend'; 
let testAccounts = [
"0x2ee279949725388faf0c6f421c287bf97cf4a6f6dc27ad9bf8c5558fa516d171",
"0x30f80fdeee4a9ba54f66aac9be8974f92a5d27c70796aff2ec074904a9c3adc9",
"0x0a0737147c9478efb82c792593caceb27844d0994fd745950154f0c3cc8ef108",
"0xc0519af2bd149d7737f02d7ebfdaa2a3a94035be09db0097f15a598bb310b7c7",
"0x443aeb53ef239bc01a3b6cdef48abc187b140f48e63f3412fb01b04246aaa18f",
"0xf5f51b9ab4d3aa3c92d5abd756643ba0e0c3420a1637154fe3a1f4a40575084a",
"0x215bb87c4782c699cfdd5939433086b3e6589e3331ece7b843b3580473e43a2e",
"0xa0ca8e80390514fc4712f3817ec361094d52c9e0837b3ff15d0c108a863b3369",
"0x126568f851d451e05bf6693127ba518969e37a5ecf698daced9409e0b6eabb40",
"0x4b6ffbc59036d44265487361466b530d5aa66b2423ecc3e85b960ac5e92c8ba4"
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

