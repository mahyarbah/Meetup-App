import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';
//favoritescontextprovider inside {} cause: we dont want the default export
//but the component function insted so import NAMED export in {} (standard JS)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavoritesContextProvider>
);
