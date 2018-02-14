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
        header: '',
        description: (
          <Link
            style={{
              fontSize: '20px',
              color: 'purple',
              textTransform: 'uppercase',
            }}
            to={`/card/${address}`}>
            {address}
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
        <div className={s.container}>
          <h1
            style={{
              color: 'purple',
              backgroundColor: 'rgba(255, 192, 203, 0.4)',
            }}>
            ~ All My Valentines ~
          </h1>
          {this.renderLocks()}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(MyCards);
