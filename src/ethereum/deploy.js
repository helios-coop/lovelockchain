const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledLoveLockChain = require('./buildContract/LoveLockChain.json');

const provider = new HDWalletProvider(
  'era enter strike job legal book secret barrel waste error laundry live',
  'https://rinkeby.infura.io/nFGVPlVOdrfz9ZYEKAc1',
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledLoveLockChain.interface),
  )
    .deploy({
      data: compiledLoveLockChain.bytecode,
    })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();

// const HDWalletProvider = require('truffle-hdwallet-provider');
// const Web3 = require('web3');
// const { interface, bytecode } = require('./compile');
//
// // console.log("mnemonic: ", process.env.METAMASKMNEMONIC);
// console.log('infura_url: ', process.env.INFURA_RINKEBY);
//
// const provider = new HDWalletProvider(
// 	process.env.METAMASKMNEMONIC,
// 	process.env.INFURA_RINKEBY
// );
//
// console.log('provider: ', provider);
//
// const web3 = new Web3(provider);
//
// const deploy = async () => {
// 	const accounts = await web3.eth.getAccounts();
// 	console.log('accounts: ', accounts);
//
// 	console.log('Attempting to deploy from account ', accounts[0]); // Need to use MetaMask Account 2
//
// 	const result = await new web3.eth.Contract(JSON.parse(interface))
// 		.deploy({ data: bytecode, arguments: ['Blockchains Are Forever'] })
// 		.send({ gas: '1000000', from: accounts[0] });
//
// 	console.log('Contract deployed to ', result.options.address);
// };
//
// deploy();
//
// // Attempting to deploy from account  0xa9ad05b8A28D254a1f535ff96169343aB6DD0C43
// // Contract deployed to  0x400eF4A8ECbc9EA72fE00CB8e5aAbb3400A277BF
