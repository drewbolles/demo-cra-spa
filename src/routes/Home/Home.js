import React from 'react';

import { useRepos } from '../../components/ReposProvider/ReposProvider';
import Loading from '../../components/Loading/Loading';

export default function Home() {
  const { repos, status } = useRepos();
  return (
    <div data-testid="route-home">
      <h1 className="text-2xl mb-4">Home Page</h1>
      <div>
        <h2 className="text-xl mb-2">My GitHub Repos</h2>
        {status === 'loading' && <Loading />}
        {status === 'success' && (
          <ul className="list-disc">
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.url} className="text-blue-700 hover:underline">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
