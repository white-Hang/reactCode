import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
// import Demo from './components/8_ErrorBoundary/Parent'
const Hooks = lazy(() => import('./index.jsx'))
const UseState = lazy(() => import('./useState/index'))
const UseReducer = lazy(() => import('./useReducer/index'))
const UseContext = lazy(() => import('./useContext/index'))
const UseEffect = lazy(() => import('./useEffect/index'))
const UseMemo = lazy(() => import('./useMemo/index'))
const UseLayoutEffect = lazy(() =>
  import('./useLayoutEffect/index')
)
export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/useState" component={UseState}></Route>
          <Route path="/useReducer" component={UseReducer}></Route>
          <Route path="/useContext" component={UseContext}></Route>
          <Route path="/useEffect" component={UseEffect}></Route>
          <Route path="/useLayoutEffect" component={UseLayoutEffect}></Route>
          <Route path="/useMemo" component={UseMemo}></Route>
          <Route path="/" component={Hooks}></Route>
        </Switch>
      </Suspense>
    )
  }
}
