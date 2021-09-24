import React, { useState, useMemo, useCallback } from 'react'

const UseMemo = () => {
  const [countOne, setOne] = useState(() => 0)
  const [countTwo, setTwo] = useState(() => 0)
  //   const onClickChild = (props) => {
  //     console.log(props, 'aaaaaaa')
  //     setOne((countOne) => countOne + 1)
  //   }
  //   useMemo
  // 第一个参数是 () => value

  // 第二个参数是依赖 [m, n]

  // 只有当依赖变化时，才会计算出新的 value

  // 如果依赖不变，那么就重用之前的 value
  const onClickChild = useMemo(() => {
    console.log('useMemo执行')
    return (props) => {
      console.log(props, 'aaaaaaa')
      setOne((countOne) => countOne + 1)
    }
  }, [countTwo])

  //   useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
  //   const onClickChild = useCallback(
  //     (props) => {
  //       console.log(props, 'aaaaaaa')
  //       setOne((countOne) => countOne + 1)
  //     },
  //     [countTwo]
  //   )
  return (
    <div>
      <h1>{countOne}</h1>
      <button onClick={() => setOne((countOne) => countOne + 1)}>
        +countOne
      </button>
      <button onClick={() => setTwo((countTwo) => countTwo + 1)}>
        +countTwo
      </button>
      {/*但是如果传了一个引用，则React.memo无效。因为引用是不相等的*/}
      <Child count={countTwo} onClickChild={onClickChild}></Child>
    </div>
  )
}
//如果Child不加React.memo父组件状态修改，子组件同样重新执行
// const Child = (props) => {
//   console.log('child执行了')
//   console.log('假设这里有大量代码')
//   return <div>{props.count}</div>
// }
// 这玩意有一个bug
// 添加了监听函数之后，一秒破功因为 父组件 运行时，会再次执行 onClickChild，生成新的函数
// 新旧函数虽然功能一样，但是地址引用不一样！
const Child = React.memo((props) => {
  console.log(props, 'props')
  console.log('child执行了')
  console.log('假设这里有大量代码')
  return (
    <div
      onClick={() => {
        console.log('11')
        props.onClickChild('我给父组件传值啦！')
      }}
    >
      {props.count}
    </div>
  )
})
export default UseMemo
