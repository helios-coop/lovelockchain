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

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div style={{ backgroundColor: 'rgba(255, 192, 203, 0.4)' }}>
            <h1 style={{ color: 'purple' }}>
              &hearts; Discover A Valentine Below or Write Yours Today! &hearts;
            </h1>
            <h3 style={{ color: 'purple', textTransform: 'capitalize' }}>
              don't hurt a tree or break a bridge, profess your digital love
              because
              <bold> BLOCKCHAINS ARE FOREVER! </bold>
            </h3>
            <br />
          </div>
          {this.renderLocks()}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
