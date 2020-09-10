import React from 'react';
import { render } from '../../utils/test-utils';
import NavLink from './NavLink';

test('renders with child', () => {
  const { getByText, getByTestId } = render(<NavLink to="/">Link</NavLink>);
  expect(getByTestId('nav-link', { selector: 'a[href="/"]' })).toContainElement(
    getByText('Link')
  );
});
