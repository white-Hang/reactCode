import React from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import logo from '../../assets/image/min-logo.png'
import style from './leftNav.module.less'
const LeftNav = (props) => {
  const { collapsed } = props
  console.log(props, 'props')
  return (
    <div className={style.leftNav}>
      <img src={logo} alt="" className={style.logo} />
      {!collapsed ? <div className={style.title}>血液透析智能系统</div> : null}
    </div>
  )
}

export default React.memo(LeftNav)
