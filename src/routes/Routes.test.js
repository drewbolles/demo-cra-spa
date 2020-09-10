import React from 'react';
import { render } from '../utils/test-utils';
import Routes from './Routes';

test('renders the routes', () => {
  const { getByTestId } = render(<Routes />);
  // routes are lazy loaded, so by default the loading component
  // is rendered
  expect(getByTestId('loading')).toBeInTheDocument();
});
