import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import { ReposProvider } from '../components/ReposProvider/ReposProvider';

export default function Routes() {
  return (
    <ReposProvider>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </ReposProvider>
  );
}
