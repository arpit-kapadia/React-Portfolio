import React, { Component } from 'react';

import { styles } from './styles';

class Navbar extends Component {
  render() {
    return (
      <div style={styles.navbarContainer}>
        <div style={styles.navbarLeftHead}>
          Portfolio
        </div>

        <div style={styles.navbarRightHead}>
          Right Menu
        </div>
      </div>
    )
  }
}

export default Navbar;
