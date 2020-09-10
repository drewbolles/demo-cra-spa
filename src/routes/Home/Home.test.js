import React from 'react';
import { render } from '../../utils/test-utils';
import Home from './Home';
import { ReposProvider } from '../../components/ReposProvider/ReposProvider';

test('home page renders', () => {
  const { getByTestId } = render(
    <ReposProvider>
      <Home />
    </ReposProvider>
  );
  expect(getByTestId('route-home')).toBeInTheDocument();
});
