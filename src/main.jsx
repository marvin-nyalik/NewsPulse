/* eslint-disable react/prop-types */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

export const ErrorFallback = ({error, resetErrorBoundary}) => {

  const navigate = useNavigate();

  return (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre style={{ color: "red" }}>{error.message}</pre>
    <button onClick={()=>{resetErrorBoundary(); navigate('/')}}>Try again</button>
  </div>
  );
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);

