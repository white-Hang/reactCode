import React from 'react'
const Index = (props) => {
  console.log(props, 'props')
  const jumpUseState = () => {
    props.history.push({
      pathname: '/useState',
    })
  }
  const jumpUseReducer = () => {
    props.history.push({
      pathname: '/useReducer',
    })
  }
  const jumpUseContext = () => {
    props.history.push({
      pathname: '/useContext',
    })
  }
  const jumpUseEffect = () => {
    props.history.push({
      pathname: '/useEffect',
    })
  }
  const jumpUseLayoutEffect = () => {
    props.history.push({
      pathname: '/useLayoutEffect',
    })
  }
  const jumpUseMemo = () => {
    props.history.push({
      pathname: '/useMemo',
    })
  }
  return (
    <div>
      <button onClick={jumpUseState}>跳转useState</button>
      <button onClick={jumpUseReducer}>跳转useReducer</button>
      <button onClick={jumpUseContext}>跳转useContext</button>
      <button onClick={jumpUseEffect}>跳转useEffect</button>
      <button onClick={jumpUseLayoutEffect}>跳转useLayoutEffect</button>
      <button onClick={jumpUseMemo}>跳转useMemo</button>
    </div>
  )
}

export default React.memo(Index)
