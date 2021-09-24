import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import LeftNav from '../../components/leftNav/leftNav'
import { Route, Switch, Redirect } from 'react-router-dom'
const { Header, Sider, Content } = Layout
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(() => false)
  const toggle = () => {
    setCollapsed((collapsed) => !collapsed)
  }
  const token = localStorage.getItem('token')
  if (!token) {
    return <Redirect to="/login" />
  }
  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={256}
        style={{ background: '#335361' }}
      >
        <LeftNav collapsed={collapsed}></LeftNav>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, background: '#fff' }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              style: { marginLeft: '20px' },
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default React.memo(Admin)
