import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import mock from './mock/index.js'
const Login = lazy(() => import('./pages/login/login.jsx'))
const Admin = lazy(() => import('./pages/admin/admin.jsx'))

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </Suspense>
    )
  }
}
