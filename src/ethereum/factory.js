import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x06333d7784fD0965d9346173000C36243eF59Bf8'
);

export default instance;
