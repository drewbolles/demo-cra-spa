import React from 'react';
import { render } from '../../utils/test-utils';
import About from './About';

test('about page renders', () => {
  const { getByTestId } = render(<About />);
  expect(getByTestId('route-about')).toBeInTheDocument();
});
