import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import QueryResults from '../containers/Home/QueryResults'
import Profile from '../containers/Profile'
import Layout from '../components/Layout'
import Error404 from '../components/Errors/Error404'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/search/:query' component={ QueryResults } />
          <Route exact path='/:user' component={ Profile } />
          <Route component={Error404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
