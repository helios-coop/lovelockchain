import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Card.css';
import Link from '../Link';

const bkgd = './assets/backgrounds/';
const brdr = './assets/borders/';
const flar = './assets/flairs/';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const a = parseInt(this.props.hash.substring(2, 4), 16) % 8;
    const b = parseInt(this.props.hash.substring(4, 6), 16) % 8;
    const c = parseInt(this.props.hash.substring(6, 8), 16) % 8;

    return (
      <div className={s.root}>
        <div className={s.container}>
          {/* This is where the card goes */}
          <img className={s.pattern} src={require(`${bkgd}${a}.png`)} />
          <img className={s.border} src={require(`${brdr}${b}.png`)} />
          <img className={s.flair} src={require(`${flar}${c}.png`)} />
          {/* <div className={s.loveletter}>
            {`To:${this.props.to}`}
            <br />
            {`${this.props.msg}`}
            <br />
            {`From:${this.props.from}`}
            <br />
            {`${this.props.xoxo}`}
          </div> */}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Card);
