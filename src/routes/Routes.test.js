import React from 'react';
import { render } from '../utils/test-utils';
import Routes from './Routes';
import { ReposProvider } from '../components/ReposProvider/ReposProvider';

test('renders the routes', () => {
  const { getByTestId } = render(<Routes />);
  // expect it to render the home route. this test is directly
  // tied to the test id of the home route
  expect(getByTestId('route-home')).toBeInTheDocument();
});
