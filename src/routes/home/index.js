import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

import cardFactory from '../../ethereum/cardFactory.js';
import { Card, Button } from 'semantic-ui-react';

async function action() {
  const locks = await cardFactory.methods.getHashes().call();
  // console.log(locks);
  return {
    title: 'Home',
    component: (
      <Layout>
        <Home locks={locks} />
      </Layout>
    ),
  };
}

export default action;
