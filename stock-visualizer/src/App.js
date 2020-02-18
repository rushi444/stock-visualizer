import React from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import { MainDashboard } from './components/dashboard/MainDashboard';

export const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <MainDashboard />
    </div>
  );
};
