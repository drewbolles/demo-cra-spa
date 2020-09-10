import React from 'react';
import { useQuery } from 'react-query';

async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/drewbolles/repos');
  return response.json();
}

export default function Home() {
  const { data: repos, status } = useQuery('repos', fetchRepos, {
    useErrorBoundary: true,
  });

  return (
    <div data-testid="route-home">
      <h1 className="text-2xl mb-4">Home Page</h1>
      <div>
        <button
          onClick={() => {
            throw new Error('throw');
          }}
        >
          Throw
        </button>
        <h2 className="text-xl mb-2">My GitHub Repos</h2>
        {status === 'loading' && (
          <div>
            <svg
              className="animate-spin h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
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
