import React, { useReducer } from 'react'

const UseReducer = ({ initialCount = 0 }) => {
  // 一、创建初始值initialState

  // 二、创建所有操作reducer(state, action);

  // 三、传给userReducer，得到读和写API

  // 四、调用写({type: '操作类型'})

  // 总的来说，useReducer 是 useState 的复杂版
  //   useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法
  //   在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。
  const init = (initialCount) => {
    return { count: initialCount }
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      case 'reset':
        return init(action.payload)
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  return (
    <div>
      Count:{state.count}
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  )
}
export default React.memo(UseReducer)
