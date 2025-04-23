import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/routes';
import { AppProvider } from './app/store/AppContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <main className="p-4">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
