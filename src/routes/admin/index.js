import React from 'react';
import NewCard from './NewCard';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  return {
    title: 'Card View',
    component: (
      <Layout>
        <NewCard />
      </Layout>
    ),
  };
}

export default action;
