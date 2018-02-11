import React from 'react';
import ViewCard from './ViewCard';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  return {
    title: 'Card View',
    component: (
      <Layout>
        <ViewCard />
      </Layout>
    ),
  };
}

export default action;
