// const path = require('path');
// const fs = require('fs');
// const solc = require('solc');
//
// // get contract path
// const inbothPath = path.resolve(__dirname, 'contracts', 'LoveLockChain.sol');
//
// // read in contract source code
// const source = fs.readFileSync(inbothPath, 'utf8');
//
// // compile source code. gets us interface(abi) and byte code. allow us to export compiled code.
// module.exports = solc.compile(source, 1).contracts[':LoveLockChain'];

// if packages need to be reinstalled
// npn install --save solc
// npm install --save mocha ganache-cli web3@1.0.0-beta.27

// old code
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'LoveLockChain.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':', '') + '.json'),
		output[contract]
	);
}
