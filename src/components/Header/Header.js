/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrlText from './lovelockchaindotcom_logo_fullAsset 6.svg';
import logoUrl from './lock-logoAsset 3.svg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img className={s.logo} src={logoUrl} alt="<3" />
            <img className={s.logo} src={logoUrlText} alt="Love Lock Chain" />
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
