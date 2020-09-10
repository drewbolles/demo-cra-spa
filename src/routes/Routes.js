import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// We're importing this here, but really it could be wherever in your
// component tree that makes sense. This serves as an example provider that all routes share.
import { ReposProvider } from '../components/ReposProvider/ReposProvider';
import Loading from '../components/Loading/Loading';

// By using Reacy.lazy for our routes we enable route-based code splitting
// https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
const Home = React.lazy(() => import('./Home/Home'));
const About = React.lazy(() => import('./About/About'));

export default function Routes() {
  return (
    <ReposProvider>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <Loading width="w-12" height="h-12" />
          </div>
        }
      >
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </ReposProvider>
  );
}
