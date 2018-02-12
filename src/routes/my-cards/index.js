import React from 'react';
import MyCards from './MyCards';
import Layout from '../../components/Layout';

import web3 from '../../ethereum/web3.js';
import cardFactory from '../../ethereum/cardFactory.js';
import { Card, Button } from 'semantic-ui-react';

async function action() {
  const accounts = await web3.eth.getAccounts();
  const locks = await cardFactory.methods.getUserCards(accounts[0]).call();

  return {
    title: '',
    component: (
      <Layout>
        <MyCards locks={locks} />
      </Layout>
    ),
  };
}

export default action;
