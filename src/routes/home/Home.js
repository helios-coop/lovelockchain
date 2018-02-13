import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Link from '../../components/Link';
import cardFactory from '../../ethereum/cardFactory.js';
import { Card, Button } from 'semantic-ui-react';

class Home extends React.Component {
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

    return (
      <Card.Group style={{ background: 'pink', color: 'red' }} items={items} />
    );
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>{this.renderLocks()}</div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
