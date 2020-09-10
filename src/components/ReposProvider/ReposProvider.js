import React from 'react';
import { useQuery } from 'react-query';

import { fetchRepos } from '../../utils/gateway';

const { createContext, useContext } = require('react');

const ReposContext = createContext();

export const useRepos = () => useContext(ReposContext);

export function ReposProvider({ children }) {
  const { data: repos, status } = useQuery('repos', fetchRepos, {
    useErrorBoundary: true,
  });

  return (
    <ReposContext.Provider value={{ repos, status }}>
      {children}
    </ReposContext.Provider>
  );
}
