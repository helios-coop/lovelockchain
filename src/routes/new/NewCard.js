import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewCard.css';

import Card from '../../components/Card';

import {
  Grid,
  Form,
  Button,
  Input,
  Message,
  TextArea,
  Label,
} from 'semantic-ui-react';

import Web3Utils from 'web3-utils';
import web3 from '../../ethereum/web3.js';
import cardFactory from '../../ethereum/cardFactory.js';

class NewCard extends React.Component {
  state = {
    to: '',
    from: '',
    msg: 'Blockchains Are Forever!',
    xoxo: '',
    hash: '0xb4032258f78dffb0227d8cacc1300aca34ddcc4f934c7bb64de50576878fecc2',
    errorMessage: '',
    loading: false,
  };

  hashMessage() {
    this.setState({
      hash: Web3Utils.soliditySha3(
        // this.state.to + this.state.from + this.state.msg + this.state.xoxo,
        this.state.msg,
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
      this.setState({ xoxo: `${this.state.xoxo}xo` });
    }
    this.hashMessage();
  }

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    const loveLetter =
      // this.state.msg + this.state.to + this.state.from + this.state.xoxo;
      this.state.msg;

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
    console.log(this.state.hash);
    return (
      <div className={s.root}>
        <div>
          <div className={s.container}>
            <Card
              to={this.state.to}
              from={this.state.from}
              msg={this.state.msg}
              hash={this.state.hash}
              xoxo={this.state.xoxo}
            />
          </div>
          <Form
            className={s.toInput}
            onSubmit={this.onSubmit}
            error={!!this.state.errorMessage}>
            <Form.TextArea
              autoHeight
              style={{
                color: 'red',
                fontSize: '20px',
                width: '30%',
                right: '300px',
              }}
              id="msg"
              value={this.state.msg}
              onChange={event =>
                this.onInput(event.target.value, event.target.id)
              }
              maxLength="255"
            />
            <Button className={s.toInput} loading={this.state.loading} primary>
              Send to the Blockchain!
            </Button>
            <Message
              className={s.toInput}
              error
              header="Oops"
              content={this.state.errorMessage}
            />
            {/* <Grid columns={3}>
              <Grid.Row>
                <Grid.Column />
                <Grid.Column>
                  {/* <Input
                    style={{ 'font-size': ' 1.5em' }}
                    autoHeight
                    id="from"
                    value={this.state.from}
                    onChange={event =>
                      this.onInput(event.target.value, event.target.id)
                    }>
                    <Label
                      style={{
                        width: '120px',
                        'font-size': '0.5em',
                        background: '#E8E8E8',
                      }}
                      basic>
                      To:
                    </Label>
                    <input maxLength="12" />
                  </Input> */}
            {/* <Form.TextArea
                    autoHeight
                    style={{ color: 'red', 'font-size': '20px' }}
                    id="msg"
                    value={this.state.msg}
                    onChange={event =>
                      this.onInput(event.target.value, event.target.id)
                    }
                    maxLength="255"
                  /> */}
            {/* <Input
                    style={{ 'font-size': ' 1.5em' }}
                    autoHeight
                    id="to"
                    value={this.state.to}
                    onChange={event =>
                      this.onInput(event.target.value, event.target.id)
                    }>
                    <Label
                      style={{
                        width: '120px',
                        'font-size': '0.5em',
                        background: '#E8E8E8',
                      }}
                      basic>
                      To:
                    </Label>
                    <input maxLength="12" />
                  </Input> */}
            {/* <Button
                    className={s.toInput}
                    loading={this.state.loading}
                    primary>
                    Send to the Blockchain!
                  </Button>
                  <Message
                    className={s.toInput}
                    error
                    header="Oops"
                    content={this.state.errorMessage}
                  /> */}
            {/* </Grid.Column>
                <Grid.Column />
              </Grid.Row>
            </Grid> */}
          </Form>
          {/* <Button
            className={s.xoButton}
            circular={true}
            id="xoxo"
            onClick={event => this.onInput('', event.target.id)}>
            xo{this.state.xoxo}
          </Button> */}
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
