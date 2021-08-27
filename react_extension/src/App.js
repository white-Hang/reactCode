import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
// import Demo from './components/8_ErrorBoundary/Parent'
const Hooks = lazy(() => import('./components/3_hooks/index.jsx'))
const UseState = lazy(() => import('./components/3_hooks/useState/index'))
const UseReducer = lazy(() => import('./components/3_hooks/useReducer/index'))
const UseContext = lazy(() => import('./components/3_hooks/useContext/index'))
const UseEffect = lazy(() => import('./components/3_hooks/useEffect/index'))
const UseMemo = lazy(() => import('./components/3_hooks/useMemo/index'))
const UseLayoutEffect = lazy(() =>
  import('./components/3_hooks/useLayoutEffect/index')
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
