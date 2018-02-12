import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MyCards.css';
import Link from '../../components/Link';
import cardFactory from '../../ethereum/cardFactory.js';
import { Card, Button } from 'semantic-ui-react';

class MyCards extends React.Component {
  renderLocks() {
    const items = this.props.locks.map(address => {
      return {
        header: address,
        description: (
          <Link to={`/card/${address}`}>
            <a>View Card</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>{this.renderLocks()}</div>
      </div>
    );
  }
}

export default withStyles(s)(MyCards);
