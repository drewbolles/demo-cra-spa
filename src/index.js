import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { queryCache } from 'react-query';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary
      onReset={() => {
        queryCache.resetErrorBoundaries();
      }}
      onError={(error, stackTrace) => {
        // TODO: Send the error to Sentry
      }}
      fallbackRender={({ resetErrorBoundary }) => (
        <div className="text-center">
          <h2 className="text-2xl mb-4">Opps! Something went wrong</h2>
          <button
            onClick={resetErrorBoundary}
            className="inline-flex items-center h-12 px-6 bg-blue-700 text-white text-lg font-bold rounded-sm shadow"
          >
            Retry
          </button>
        </div>
      )}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
