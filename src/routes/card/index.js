import React from 'react';
import ViewCard from './ViewCard';
import Layout from '../../components/Layout';

async function action(props, { fetch }) {
  // console.log(props.params.address);
  return {
    title: 'Card View',
    component: (
      <Layout>
        <ViewCard address={props.params.address} />
      </Layout>
    ),
  };
  // console.log(context);
}

export default action;
