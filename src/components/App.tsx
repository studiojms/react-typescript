import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Template from './Template';
import Home from './Home';

const App: React.FC<{}> = () => (
  <Router>
    <Template>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Template>
  </Router>
);

export default App;
