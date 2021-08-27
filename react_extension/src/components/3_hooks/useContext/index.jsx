import React, { createContext, useContext, useState } from 'react'
const context = createContext()
const UseContext = () => {
  // 一、使用 context = createContext(initial) 创建上下文

  // 二、使用 <context.Provider> 圈定作用域

  // 三、在作用域内使用 useContext(context)来使用上下文
  return (
    <context.Provider value={{ name: '大头儿子' }}>
      <Parent></Parent>
    </context.Provider>
  )
}

const Parent = () => {
  const { name } = useContext(context)
  return <div>我是{name}</div>
}
export default React.memo(UseContext)
