/* eslint-disable global-require */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContent from './Screens/MainContent';

import './App.global.css';
import { IsDarkMode } from './Helpers/helpers';

const AppContent = () => {
  const [DarkMode, setDarkMode] = useState(false);
  const [GotDarkMode, setGotDarkMode] = useState(false);
  if (!GotDarkMode) {
    setDarkMode(IsDarkMode());
    setGotDarkMode(true);
  }
  setInterval(() => setDarkMode(IsDarkMode()), 15000);
  return <MainContent IsDarkMode={DarkMode} />;
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
