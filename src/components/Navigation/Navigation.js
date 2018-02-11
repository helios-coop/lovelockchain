import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/how-to">
          How To
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/my-cards">
          My Cards
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.primary} to="/new">
          Write New Valentine +
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
