import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Link from '../../components/Link';
import cardFactory from '../../ethereum/cardFactory.js';
import { Card, Button } from 'semantic-ui-react';

class Home extends React.Component {
  static async getInitialProps() {
    const locks = await cardFactory.methods.getHashes().call();

    return { locks };
  }

  renderLocks() {
    const items = this.props.locks.map(address => {
      // this.setState({ cardMessage: getMessage(address) });

      return {
        header: address,
        description: (
          <Link route={`/cards/${address}`}>
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
        <div className={s.container}>
          <Link className={s.newsTitle} to="/card">
            View Cards
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
