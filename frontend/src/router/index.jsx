import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import IndexPage from '../pages/IndexPage.jsx'
import SandboxPage from '../pages/SandboxPage.jsx'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/container/:containerID" component={SandboxPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
