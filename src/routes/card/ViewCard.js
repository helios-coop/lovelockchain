import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ViewCard.css';
import Card from '../../components/Card';

import Web3Utils from 'web3-utils';
import web3 from '../../ethereum/web3.js';
import cardFactory from '../../ethereum/cardFactory.js';

class ViewCard extends React.Component {
  static async getInitialProps(props) {
    const card = await CardFactory.methods.cards(props.query.address).call();

    return { card };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Card
            to=""
            from=""
            msg={this.props.card}
            hash={this.props.query.address}
            xoxo=""
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ViewCard);
