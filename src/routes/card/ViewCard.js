import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ViewCard.css';
import Card from '../../components/Card';

import createBrowserHistory from 'history/createBrowserHistory';

import cardFactory from '../../ethereum/cardFactory.js';

class ViewCard extends React.Component {
  state = {
    hash: createBrowserHistory().location.pathname.substring(6),
  };

  async getMsg(hash) {
    const msg = await cardFactory.methods.cards(hash).call();
    return msg;
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Card
            to=""
            from=""
            msg={this.getMsg(this.state.hash)}
            hash={this.state.hash}
            xoxo=""
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ViewCard);
