import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Card.css';
import Link from '../Link';
const Web3 = require('web3');

const bkgd = './assets/backgrounds/';
const brdr = './assets/borders/';
const flar = './assets/flairs/';

class Card extends React.Component {
  state = {
    to: 'Margie',
    from: 'Dylan',
    msg: 'I Love You!',
    xoxo: 'xoxo',
    hash: 2,
  };

  render() {
    let a = this.state.hash;
    let b = this.state.hash;
    let c = this.state.hash;

    return (
      <div className={s.root}>
        <div className={s.container}>
          {/* This is where the card goes */}
          <img className={s.pattern} src={require(`${bkgd}${a}.png`)} />
          <img className={s.border} src={require(`${brdr}${b}.png`)} />
          <img className={s.flair} src={require(`${flar}${c}.png`)} />
          <div className={s.loveletter}>{this.state.msg}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Card);
