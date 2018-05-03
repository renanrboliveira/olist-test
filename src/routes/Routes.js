
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { publicRoutes } from './pathUrls'
import NotFoundPage from '../pages/notfound'

const Routes = () => {
  const setRoute = route =>
    <Route key={route.path} {...route} exact />

  const routes = [
    publicRoutes.map(setRoute)
  ]

  return (
    <Switch>
      {routes}
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default Routes
