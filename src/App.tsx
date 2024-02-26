import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Users from './pages/Users';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>

  );
}

export default App;
