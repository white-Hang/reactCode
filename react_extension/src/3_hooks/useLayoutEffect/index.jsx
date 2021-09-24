import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {
  // useEffect 在浏览器渲染完成后执行
  // useLayoutEffect 在浏览器渲染前执行
  //执行顺序打印出 2、3、1
  useEffect(() => {
    console.log(1)
  })
  useLayoutEffect(() => {
    console.log(2)
  })
  useLayoutEffect(() => {
    console.log(3)
  })
  return <div>1</div>
}
export default React.memo(UseLayoutEffect)
