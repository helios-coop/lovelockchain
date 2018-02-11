import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewCard.css';

import Card from '../../components/Card';

import { Form, Button, Input, Message, TextArea } from 'semantic-ui-react';

import Web3Utils from 'web3-utils';
import web3 from '../../ethereum/web3.js';
import cardFactory from '../../ethereum/cardFactory.js';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class NewCard extends React.Component {
  state = {
    to: 'Margie',
    from: 'Dylan',
    msg: 'I Love You!',
    xoxo: '',
    hash: '0x2b04018c49d5ae5c038dc3fd9b58972b969f9ae0adb5a9fe169e3e64b9d1505f',
    errorMessage: '',
    loading: false,
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

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    var loveLetter =
      this.state.msg + this.state.to + this.state.from + this.state.xoxo;

    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      console.log(cardFactory);
      await cardFactory.methods.createCard(loveLetter).send({
        from: accounts[0],
        value: web3.utils.toWei('.001', 'ether'),
      });

      // Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <div className={s.root}>
        <div>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Input
              autoHeight
              label="To:"
              id="to"
              value={this.state.to}
              onChange={event =>
                this.onInput(event.target.value, event.target.id)
              }
            />
            <Form.Input
              autoHeight
              label="From:"
              id="from"
              value={this.state.from}
              onChange={event =>
                this.onInput(event.target.value, event.target.id)
              }
            />
            <Form.TextArea
              autoHeight
              label="Write Your Love Letter:"
              id="msg"
              value={this.state.msg}
              onChange={event =>
                this.onInput(event.target.value, event.target.id)
              }
            />
            {/* <Message error header="Oops" content={this.state.errorMessage} /> */}
            <Form.Button
              id="xoxo"
              onClick={event => this.onInput('', event.target.id)}>
              xo{this.state.xoxo}
            </Form.Button>
            <Button loading={this.state.loading} primary>
              Send to the Blockchain!
            </Button>
          </Form>
        </div>
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

/* <input
  id="msg"
  value={this.state.msg}
  onChange={event =>
    this.onInput(event.target.value, event.target.id)
  }
/>
<input
  className={s.smallInput}
  id="to"
  value={this.state.to}
  onChange={event =>
    this.onInput(event.target.value, event.target.id)
  }
/>
<input
  className={s.smallInput}
  id="from"
  value={this.state.from}
  onChange={event =>
    this.onInput(event.target.value, event.target.id)
  }
/>
<button
  type="button"
  id="xoxo"
  onClick={event => this.onInput('', event.target.id)}>
  xo{this.state.xoxo}
</button>
<button type="submit" onClick={event => this.onSubmit()}>
  Send to the Blockchain!
</button>
 */
