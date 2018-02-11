import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

import cardFactory from '../../ethereum/cardFactory.js';
import { Card, Button } from 'semantic-ui-react';

async function action({ fetch }) {
  const locks = await cardFactory.methods.getHashes().call();
  // console.log(locks);
  return {
    title: 'React Starter Kit',
    component: (
      <Layout>
        <Home locks={locks} />
      </Layout>
    ),
  };
}

export default action;
