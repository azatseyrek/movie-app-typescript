import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MovieContextProvider} from './context/MovieContext';
import './styles/main.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </QueryClientProvider>,
);
