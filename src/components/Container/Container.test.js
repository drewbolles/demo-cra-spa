import React from 'react';
import Container from './Container';
import { render } from '@testing-library/react';

test('it renders children without exploding', () => {
  const { getByTestId, getByText } = render(<Container>Child</Container>);
  expect(getByTestId('container')).toContainElement(getByText('Child'));
});
