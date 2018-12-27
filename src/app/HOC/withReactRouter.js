import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

class ModifiedRouter extends Router {
  history;
}

function withReactRouter(Component) {
  function WithReactRouter(props) {
    return (
      <Router>
        <Component {...props} />
      </Router>
    );
  }

  return WithReactRouter;
}

export default withReactRouter;
