import React from 'react';
import { render } from '../../utils/test-utils';
import { ReposProvider, useRepos } from './ReposProvider';

function Child() {
  const { status } = useRepos();
  return <div data-status={status}>Child</div>;
}

test('renders children', () => {
  const { getByText } = render(
    <ReposProvider>
      <Child />
    </ReposProvider>
  );
  expect(getByText('Child')).toHaveAttribute('data-status', 'loading');
});
