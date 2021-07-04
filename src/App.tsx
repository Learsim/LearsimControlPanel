/* eslint-disable global-require */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import mDNS from 'multicast-dns';
import MainContent from './Screens/MainContent';
import './App.global.css';

const AppContent = () => {
  const x = mDNS();
  x.on('response', function (response) {
    console.log('got a response packet:', response);
  });

  x.query('learsim', 'A');

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
