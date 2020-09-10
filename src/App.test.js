import React from 'react';
import App from './App';
import { render } from './utils/test-utils';

test('renders app', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('app')).toBeInTheDocument();
  expect(getByTestId('loading')).toBeInTheDocument();
});
