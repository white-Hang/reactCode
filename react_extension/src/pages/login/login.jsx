import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { postFormAxiosData } from '../../api/axiosType'
import logo from '../../assets/image/logo1.png'
import style from './login.module.less'
const Login = (props) => {
  const onFinish = (values) => {
    const query = {
      account: values.username,
      password: values.password,
      tenantId: '10143',
      isloginSubmit: true,
    }
    postFormAxiosData('/login', query).then((res) => {
      localStorage.setItem('token', res.data.data.token)
      props.history.push('/')
    })
  }
  return (
    <div className={style.container}>
      <div className={style.loginForm}>
        <div className={style.right}>
          <img className={style.logo} src={logo} alt=""/>
          <div className={style.title}>储藏昱润血液透析智能系统</div>
          <Form
            name="normal_login"
            className={style.loginInputForm}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              className={style.check}
            >
              <Checkbox>十天内免登录</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={style.loginButton}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Login)
