import React from 'react';
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import VknKeycloak from './layout/Keycloak/VknKeycloak';
import './App.css';
import { Navbar } from './layout/HomePage/NavBar';
import { Footer } from './layout/HomePage/Footer';
import { HomePage } from './layout/HomePage/HomePage';
import { UserTable } from './layout/UserPage/UserTable';
import { EventTransaction } from './layout/EventTransactionPage/EventTransaction';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useEffect } from "react";


export const App = () => {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    console.log('initialized', initialized);
    if (initialized && !keycloak.authenticated) {
      keycloak.login();
    }
  }, [keycloak, initialized]);

  return (
    <div>
      {keycloak.authenticated ? (
          <div className='min-vh-100'>
              <Navbar />
              <div className='flex-grow-1'>
                <Switch>
                  <Route path='/' exact>
                    <Redirect to='/home' />
                  </Route>
                  <Route path='/home'>
                    <HomePage />
                  </Route>
                  <Route path='/user'>
                    <UserTable />
                  </Route>
                  <Route path='/eventtransaction'>
                    <EventTransaction />
                  </Route>
                </Switch>
              </div>
              <Footer />
          </div>
      ) : (
        <div>Redirecting to Keycloak...</div>
      )}
    </div>
  );
};
