import web3 from './web3';
import LoveLockChain from './buildContract/LoveLockChain.json';

const instance = new web3.eth.Contract(
  JSON.parse(LoveLockChain.interface),
  //old1: '0xad3Bd08937917500304F1584AaA0B7D557935b5C'
  //old2: '0xB5D949bD578e6275d80980dd5687f24587da37ae'
  //old dev test '0xd274915A0dB8920893F81e3e5030e21cb98DBaDA',
  '0x868756B3C0be57B5dD24B0bf3dee32c2f0fF116B',
);

export default instance;
