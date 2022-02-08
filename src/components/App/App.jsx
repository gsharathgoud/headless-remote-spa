/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Adventures from 'components/Adventures';
import AdventureDetail from 'components/AdventureDetail';
import ResponsiveGrid from 'components/AEM/ResponsiveGrid';
import Title from 'components/AEM/Title';
import Text from 'components/AEM/Text';
import Image from 'components/AEM/Image';
import Teaser from 'components/AEM/Teaser';
import Container from 'components/AEM/Container';
import logo from '../../images/wknd-logo-dk.svg';

import './App.scss';

const { REACT_APP_PUBLIC_URI } = process.env;

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <img
            src={`${REACT_APP_PUBLIC_URI}/${logo}`}
            className='logo'
            alt='WKND Logo'
          />
          <hr />
        </header>
        <Switch>
          <Route path='/adventure:path'>
            <AdventureDetail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/** *
 * Displays a grid of current adventures
 */
function Home() {
  return (
    <div className='Home'>
      <ResponsiveGrid
        pagePath='/content/aem-demo/us/en/home'
        itemPath='root/responsivegrid'
      />

      <Title pagePath='/content/aem-demo/us/en/home' itemPath='root/title' />
      <Adventures />
    </div>
  );
}

export default App;
