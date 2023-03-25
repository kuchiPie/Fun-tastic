import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import UserProvider from './Context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
            <ChakraProvider>
              <App />
            </ChakraProvider>
        </UserProvider>
      </BrowserRouter>
  </React.StrictMode>
);