// Cüzdan oluşturma address - Private Key - Mnemonic Key - Seed
const Web3 = require('web3');
const bip39 = require('bip39');
const {hdkey} = require('ethereumjs-wallet');


const web3 = new Web3();

// Binance Smart Chain RPC endpoint
web3.setProvider(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'));


const mnemonic = bip39.generateMnemonic();

const seed = bip39.mnemonicToSeedSync(mnemonic);
const hdWallet = hdkey.fromMasterSeed(seed);


const wallet = hdWallet.derivePath("m/44'/60'/0'/0/0").getWallet();
const address = '0x' + wallet.getAddress().toString('hex');
const privateKey = '0x' + wallet.getPrivateKey().toString('hex');

console.log('Mnemonic Seed:', mnemonic);
console.log('Address:', address);
console.log('Private Key:', privateKey);