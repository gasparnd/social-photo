import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Layout from './Layout'

import logo from '../assets/statics/logo.svg';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path='/' component={ Home } />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
