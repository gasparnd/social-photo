import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import QueryResults from '../containers/Home/QueryResults'
import Profile from '../containers/Profile'
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/' component={ Home } />
          <Route exact path='/search/:query' component={ QueryResults } />
          <Route exact path='/:user' component={ Profile } />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
