import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
const Login = lazy(() => import('./pages/login/login.jsx'))
const Admin = lazy(() => import('./pages/admin/admin.jsx'))

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>储藏loading...</div>}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </Suspense>
    )
  }
}
