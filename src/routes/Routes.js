import React from 'react';
import { Switch, Route } from 'react-router-dom';

// We're importing this here, but really it could be wherever in your
// component tree that makes sense. This serves as an example provider that all routes share.
import { ReposProvider } from '../components/ReposProvider/ReposProvider';

import Home from './Home/Home';
import About from './About/About';

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
