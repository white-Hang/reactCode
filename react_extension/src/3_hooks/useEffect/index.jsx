import React, { useState, useEffect } from 'react'
import axios from 'axios'
import mock from "../../mock/index.js"
const UseEffect = () => {
  const [count, setCount] = useState(() => 0)
  // 一、作为 componentDidMount 使用，[ ] 作第二个参数
  useEffect(() => {
    axios.post('/api/student').then((res) => {
      console.log(res, 'res')
    })
    console.log(`点击了${count}次数`) //只会初始化执行一次
  }, [])
  // 二、作为 componentDidUpdate 使用，可指定依赖
  //   useEffect(() => {
  //     console.log(`点击了${count}次数`) //count变化就能执行
  //   }, [count])
  // 三、作为 componentWillUnmount 使用，通过 return
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log(`点击了${count}次数`)
  //     }, 1000)
  //     return () => clearInterval(timer)
  //   }, [])
  // 四、以上三种用途可同时存在
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log(`点击了${count}次数`)
  //     }, 1000)
  //     return () => clearInterval(timer)
  //   })
  return <button onClick={() => setCount((count) => count + 1)}>点击</button>
}

export default React.memo(UseEffect)
