import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';  // Ensure this path is correct
import App from './App';
import ErrorBoundary from './ErrorBoundary';  // Import ErrorBoundary if wrapping the app here

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
