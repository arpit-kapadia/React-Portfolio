import React, { Component } from 'react';

import Routes from '../../routers';
import Footer from '../Footer';

import { styles } from './styles';

class Content extends Component {
  render() {
    return (
      <div style={styles.contentContainer}>
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default Content;
