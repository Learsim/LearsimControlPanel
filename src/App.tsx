/* eslint-disable global-require */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContent from './Screens/MainContent';
import './App.global.css';

const AppContent = () => {
  return <MainContent />;
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppContent} />
      </Switch>
    </Router>
  );
}
