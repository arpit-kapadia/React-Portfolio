import React from 'react';

import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';


import { styles } from './styles';

const Layout = (props) => (
  <div style={styles.rootContainer}>
    <Navbar />
    <Content />
  </div>
)

export default Layout;
