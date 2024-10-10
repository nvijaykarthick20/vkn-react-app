import React from 'react';
import './App.css';
import { Navbar } from './layout/HomePage/NavBar';
import { Footer } from './layout/HomePage/Footer';
import { HomePage } from './layout/HomePage/HomePage';
import { UserTable } from './layout/UserPage/UserTable';

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage /> 
      <UserTable />
      <Footer />
    </div>

  );
}
