import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ViewCard.css';
import Card from '../../components/Card';
import { Statistic } from 'semantic-ui-react';

import createBrowserHistory from 'history/createBrowserHistory';
import router from '../../router';
import routes from '../index';

import cardFactory from '../../ethereum/cardFactory.js';

class ViewCard extends React.Component {
  state = {
    hash: this.props.address, //'0xb4032258f78dffb0227d8cacc1300aca34ddcc4f934c7bb64de50576878fecc2', //createBrowserHistory().location.pathname.substring(6),
    msg: 'hello',
  };

  async componentDidMount() {
    // console.log(this.state);
    // console.log(router);
    // console.log(routes);
    const msg = await cardFactory.methods.cards(this.state.hash).call();
    this.setState({ msg: msg });
    // return msg;
  }

  render() {
    return (
      <div className={s.root}>
        <h1
          style={{
            zIndex: '100',
            position: 'absolute',
            color: 'white',
            textShadow: '2px 2px #660000',
            top: '300px',
            left: '400px',
            textAlign: 'center',
            maxWidth: '500px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}>
          {this.state.msg}
          {/* Lorem ipsum dolor sit amet consectetur adipiscing, elit nec aliquam
          purus pellentesque, class dignissim eget inceptos dictumst. Proin
          dapibus taciti eget posuere quam aliquet mi sociosqu cursus bibendum,
          est ac senectus dignissim euismod metus ullamcorper ad. Conubia
          pulvinar facilisis per habitasse cubilia sociis vel ad vehicula
          pretium, tristique pharetra tincidunt potenti mollis eu posuere
          molestie tellus libero, eros vestibulum fusce interdum taciti
          consequat euismod quis natoque. Est vivamus dictum eg. */}
        </h1>
        <div className={s.container}>
          <Card
            to=""
            from=""
            msg={this.state.msg}
            hash={this.state.hash}
            xoxo=""
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ViewCard);
