import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';

import { styles } from './styles';

class Routes extends Component {
  render() {
    return (
      <Switch style={styles.container}>
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}

export default Routes
