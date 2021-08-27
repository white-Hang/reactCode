import React from 'react'
import ReactDOM from 'react-dom'

//类式组件
/* class Demo extends React.Component {

	state = {count:0}

	myRef = React.createRef()

	add = ()=>{
		this.setState(state => ({count:state.count+1}))
	}

	unmount = ()=>{
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	show = ()=>{
		alert(this.myRef.current.value)
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.setState( state => ({count:state.count+1}))
		},1000)
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.myRef}/>
				<h2>当前求和为{this.state.count}</h2>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.unmount}>卸载组件</button>
				<button onClick={this.show}>点击提示数据</button>
			</div>
		)
	}
} */

const UseState = (props) => {
  //console.log('Demo');

  const [count, setCount] = React.useState(0)
  //   const [user, setUser] = React.useState({ name: '大帅航', age: '18' })
  const [user, setUser] = React.useState(() => ({ name: '大帅航', age: '18' }))
  /**
   * useState可以传入对象，但是js引擎会解析这个对象，计算9+9，造成多余的运算
   * useState可以传入一个函数，函数并不会执行
   * 这样写的好处是js只会在初始化值的时候执行一次函数
   * 之后就不会再查看这个函数
   */
  const myRef = React.useRef()

  React.useEffect(() => {
    // let timer = setInterval(() => {
    //   setCount((count) => count + 1)
    // }, 1000)
    // return () => {
    //   clearInterval(timer)
    // }
  }, [])

  //加的回调
  const add = () => {
    // setCount(count+1) //第一种写法
    // setCount(count+1) //第一种写法，不能加2
    //对state进行多次操作，建议使用函数写法
    // setCount((count) => count + 1)
    setCount((count) => count + 1)
  }

  //提示输入的回调
  const show = () => {
    console.log(myRef.current, 'myRef')
    alert(myRef.current.value)
  }

  const changeUser = () => {
    //setUser不可以局部更新，如果只改变其中一个，那么整个数据都会被覆盖,如下age会被覆盖掉
    // setUser({
    //   name: '大美澜',
    // })
    setUser({
      ...user, //拷贝之前的所有属性
      name: '大美澜', //这里的name覆盖之前的name
    })
  }
  //卸载组件的回调
  const unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
      <button onClick={changeUser}>点我修改人员</button>
      <h1>
        {user.name} 年龄：{user.age}
      </h1>
    </div>
  )
}

export default UseState
