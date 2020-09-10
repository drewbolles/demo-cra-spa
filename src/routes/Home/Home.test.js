import React from 'react';
import { render } from '../../utils/test-utils';
import Home from './Home';

test('home page renders', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('route-home')).toBeInTheDocument();
});
