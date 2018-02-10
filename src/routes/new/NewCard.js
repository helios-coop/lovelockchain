import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewCard.css';
import Card from '../../components/Card';
import Web3Utils from 'web3-utils';

class NewCard extends React.Component {
  state = {
    to: 'Margie',
    from: 'Dylan',
    msg: 'I Love You!',
    xoxo: '',
    hash: '0x2b04018c49d5ae5c038dc3fd9b58972b969f9ae0adb5a9fe169e3e64b9d1505f',
  };

  hashMessage() {
    this.setState({
      hash: Web3Utils.soliditySha3(
        this.state.to + this.state.from + this.state.msg + this.state.xoxo,
      ),
    });
  }

  onInput(term, id) {
    if (id == 'msg') {
      this.setState({ msg: term });
    }
    if (id == 'to') {
      this.setState({ to: term });
    }
    if (id == 'from') {
      this.setState({ from: term });
    }
    if (id == 'xoxo') {
      this.setState({ xoxo: this.state.xoxo + 'xo' });
    }
    this.hashMessage();
  }

  render() {
    console.log(this.state.hash);
    console.log(parseInt(this.state.hash.substring(2, 4), 16) % 8);
    return (
      <div className={s.root}>
        <input
          id="msg"
          value={this.state.msg}
          onChange={event => this.onInput(event.target.value, event.target.id)}
        />
        <input
          id="to"
          value={this.state.to}
          onChange={event => this.onInput(event.target.value, event.target.id)}
        />
        <input
          id="from"
          value={this.state.from}
          onChange={event => this.onInput(event.target.value, event.target.id)}
        />
        <button
          type="button"
          id="xoxo"
          onClick={event => this.onInput('', event.target.id)}>
          xo{this.state.xoxo}
        </button>
        <div className={s.container}>
          <Card
            to={this.state.to}
            from={this.state.from}
            msg={this.state.msg}
            hash={this.state.hash}
            xoxo={this.state.xoxo}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NewCard);
