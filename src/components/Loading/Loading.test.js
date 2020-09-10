import React from 'react';
import Loading from './Loading';
import { render } from '../../utils/test-utils';

test('renders', () => {
  const { getByTestId } = render(<Loading />);
  expect(getByTestId('loading')).toBeInTheDocument();
});
