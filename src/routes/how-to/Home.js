import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

const treeImg = require('./heart_tree.jpg');
const metaMaskImg = require('./meta.png');

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Whats the point of all this?</h1>
          <p>
            Love Lock Chain lets you record your love for all time. The Ethereum
            blockchain is long list of transactions or records. This list is
            distributed across tens of thousands of servers all around the
            world. Each server maintains a record of all transactions ever
            recorded to the blockchain. If one server tries to alter these
            transactions the other servers will recject the alterations. In this
            way, once a transaction is recorded it will be there forever.
            Diamonds may be forever, but Blockchains are Immutable.
          </p>

          <p>
            Love Lock Chain allows you to create a romantic note for someone
            that gets recorded to the Ethereum blockchain. It&apos;s kinda like
            carving a heart and names onto a tree. In this case no trees gdt
            hurt and no one can cut down the blockchain. In 200 yrs your great
            grandkids can come find your note.
          </p>

          <img src={treeImg} height="300" alt="heart carved in tree" />

          <hr className={s.mb40} />
          <h1>If you already have Meta Mask and Ether</h1>
          <p className={s.mb40}>
            Creating a romantic note on the blochchain is super simple.
            <ul>
              <li>
                First off make sure you have some ether in your meta mask
                account. A note costs 0.0005 Ether, plus a bit more for the
                transaction.
              </li>
              <li>
                Ensure you are logged into your Meta Mask account on the
                ethereum main network. Generally you&apos;ll be logged out if
                you haven&apos;t recently used it.
              </li>
              <li>
                Go to this page and
                <a href="http://lovelockchain.com/new">
                  {' '}
                  write your valentine now!
                </a>
              </li>
              <li>After creating a note, Meta Mask will popup for approval.</li>
              <img
                className={s.metaImg}
                src={metaMaskImg}
                height="400"
                alt="meta mask popup"
              />
              <li>
                GWEI Make sure to set the <bold>gas</bold> price to at least 10
                GWEI or the transaction might not finish.
              </li>
            </ul>
          </p>
          <hr />

          <h1>If you already have Ether, but are new to Meta Mask</h1>
          <p className={s.mb40}>
            <a href="https://metamask.io/">
              Head on over to Meta Mask and download their nifty browser
              extension.
            </a>
            <br />
            It allows you to interact with all sorts of decentralized
            applications on the etherem blockchain. So if you already have some
            ether, well it's time to put it to some use and write a love letter!
            <br />
            Once you're done, follow this steps above.
          </p>
          <hr />

          <h1>
            If Your brand new to this blockchain stuff. Whats a Meta Mask, what
            is ether?
          </h1>
          <p className={s.mb40}>
            Well hello there newcomer! I am so glad my project has promted you
            to find out more about what all this <bold>blochchain</bold> stuff
            is all about! I hope this can be a fun way for you to learn how to
            interact with an ethereum DApp (Decentralized Application) and
            become part of our ever-growing community of enthusiasts.
            <a href="https://www.coinbase.com/">
              This first thing you'll need to do is buy some ethereum.
            </a>
            I always reccomend <a href="https://www.coinbase.com/">Coinbase</a>{' '}
            for those buying the first time because it's so easy to use! Here
            are some fantastic re
          </p>
          <hr />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
