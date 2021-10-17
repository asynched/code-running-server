import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SandboxContextProvider from '../context/SandboxContext.jsx'

import IndexPage from '../pages/IndexPage.jsx'
import SandboxPage from '../pages/SandboxPage.jsx'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <SandboxContextProvider>
          <Route path="/container/:containerID" component={SandboxPage} />
        </SandboxContextProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
