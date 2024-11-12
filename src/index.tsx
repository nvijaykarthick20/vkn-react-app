import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import VknKeycloak from './layout/Keycloak/VknKeycloak';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={VknKeycloak}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactKeycloakProvider>
);
