import web3 from './web3';
import LoveLockChain from './build/LoveLockChain.json';

const instance = new web3.eth.Contract(
	JSON.parse(LoveLockChain.interface),
	'0xad3Bd08937917500304F1584AaA0B7D557935b5C'
);

export default instance;
